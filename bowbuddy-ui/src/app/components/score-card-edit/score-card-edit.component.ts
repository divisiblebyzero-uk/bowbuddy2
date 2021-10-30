import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Distance, Round, ROUNDS } from 'src/app/model/round';
import { Dozen, End, ScoreCard, SCORECARDS } from 'src/app/model/scorecard';
import { ScoreCalculationService } from 'src/app/service/score-calculation.service';

@Component({
  selector: 'app-score-card-edit',
  templateUrl: './score-card-edit.component.html',
  styleUrls: ['./score-card-edit.component.scss']
})
export class ScoreCardEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private scs: ScoreCalculationService) { }

  public scorecard!: ScoreCard;
  public innerWidth!: number;
  public showThinnerCard: boolean = false;
  public showXes: boolean = true;
  public round!: Round;
  public scorecardComplete: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const scorecardId = params['id'];
      const scorecard = SCORECARDS.find(s => s.id == scorecardId);
      if (scorecard) {
        this.scorecard = scorecard;
        const potentialRound = ROUNDS.find(r => r.name == this.scorecard.round);
        if (potentialRound) {
          this.round = potentialRound;
          this.allowableScores = this.scs.getAllowableScores(this.round);
          this.showXes = this.round.venue == 'Outdoor' && this.round.scoringType == 'Metric';
        } else {
          console.error("Unknown round: " + this.scorecard.round);
          this.router.navigate(['/scorecards']);
        }

        this.recalculate();
      } else {
        console.error("Couldn't find scorecard: " + scorecardId);
        this.router.navigate(['/scorecards']);
        //this.router.navigate(['/scorecard-new']);
      }
    });
    this.calcWidth();
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.calcWidth();
  }

  private calcWidth() {
    this.innerWidth = window.innerWidth;
    this.showThinnerCard = this.innerWidth < 684;
  }

  private addEndIfNecessary() {
    this.round.distances.forEach((d: Distance, i: number) => {
      if (!this.scorecard.distanceTotals[i]) {
        this.scorecard.distanceTotals.push({
          distance: d.length,
          dozens: []
        })
      }
      const dozens = this.scorecard.distanceTotals[i].dozens;
      if (dozens.length == 0) {
        dozens.push({
          ends: []
        });
      }
      const lastDozen = dozens[dozens.length - 1];
      if (lastDozen.ends.length < 2) {
        this.addEndAndSelect(lastDozen);
      } else {
        if (dozens.length < d.arrows / 12) {
          const newDozen: Dozen = {ends: []};
          this.addEndAndSelect(newDozen);
          dozens.push(newDozen);
        } else {
          this.scorecardComplete = true;
        }
      }
    });

  }

  private addEndAndSelect(dozen: Dozen) {
    const newEnd: End = {
      scores: ["", "", "", "", "", ""]
    };
    dozen.ends.push(newEnd);
    this.selectedEnd = newEnd;
    this.selectedIndex = 0;
  }

  public recalculate() {
    this.addEndIfNecessary();
    this.scs.calculate(this.scorecard);
  }

  public selectedEnd: End|undefined;
  public selectedIndex: number = 0;

  public scoreSelect(end: End, index: number) {
    console.log(end);
    console.log(index);
    this.selectedEnd = end;
    this.selectedIndex = index;
    this.scorecardComplete = false;
  }

  public allowableScores!: string[];

  public postScore(score: string) {
    if (this.selectedEnd) {
      this.selectedEnd.scores[this.selectedIndex] = score;
      this.selectedIndex++;
      if (this.selectedIndex > 5) {
        this.recalculate();
      }
    }
  }

}
