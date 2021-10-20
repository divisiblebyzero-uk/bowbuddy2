import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Round, ROUNDS } from 'src/app/model/round';
import { ScoreCard, SCORECARDS } from 'src/app/model/scorecard';
import { ScoreCalculationService } from 'src/app/service/score-calculation.service';

@Component({
  selector: 'app-score-card-display',
  templateUrl: './score-card-display.component.html',
  styleUrls: ['./score-card-display.component.scss']
})
export class ScoreCardDisplayComponent implements OnInit {

  public scorecard!: ScoreCard;
  public innerWidth!: number;
  public showThinnerCard: boolean = false;
  public showXes: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private scs: ScoreCalculationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const scorecardId = params['id'];
      const scorecard = SCORECARDS.find(s => s.id == scorecardId);
      if (scorecard) {
        this.scorecard = scorecard;
        this.recalculate();
      } else {
        this.router.navigate(['/scorecards']);
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

  public recalculate() {
    this.scs.calculate(this.scorecard);
    const round = ROUNDS.find(r => r.name == this.scorecard.round);
    if (round) {
      this.showXes = round.venue == 'Outdoor' && round.scoringType == 'Metric';
    }
    
  }

}
