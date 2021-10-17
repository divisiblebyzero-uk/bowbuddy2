import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreCard, SCORECARDS } from 'src/app/model/scorecard';
import { FakeDataService } from 'src/app/service/fake-data-service.service';

@Component({
  selector: 'app-score-card-selector',
  templateUrl: './score-card-selector.component.html',
  styleUrls: ['./score-card-selector.component.scss']
})
export class ScoreCardSelectorComponent implements OnInit {

  public scorecards!: ScoreCard[];

  constructor(private router: Router, private fds: FakeDataService) { }

  ngOnInit(): void {
    this.scorecards = SCORECARDS;
  }

  public showScorecardDetails(scorecard: ScoreCard) {
    this.router.navigate(['/scorecard-details', scorecard.id]);
  }

  public addFakePortsmouth() {
    this.fds.createScoreCards();
    console.log(SCORECARDS);
  }

}
