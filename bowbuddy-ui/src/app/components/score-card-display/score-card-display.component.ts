import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreCard, SCORECARDS } from 'src/app/model/scorecard';
import { ScoreCalculationService } from 'src/app/service/score-calculation.service';

@Component({
  selector: 'app-score-card-display',
  templateUrl: './score-card-display.component.html',
  styleUrls: ['./score-card-display.component.scss']
})
export class ScoreCardDisplayComponent implements OnInit {

  public scorecard!: ScoreCard;

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
    })
  }

  public recalculate() {
    this.scs.calculate(this.scorecard);
  }

}
