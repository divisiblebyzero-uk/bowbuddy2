import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUNDS } from 'src/app/model/round';
import { ScoreCard, SCORECARDS } from 'src/app/model/scorecard';
import { FakeDataService } from 'src/app/service/fake-data-service.service';

@Component({
  selector: 'app-score-card-selector',
  templateUrl: './score-card-selector.component.html',
  styleUrls: ['./score-card-selector.component.scss']
})
export class ScoreCardSelectorComponent implements OnInit {

  public scorecards!: ScoreCard[];

  public rounds!: string[];

  constructor(private router: Router, private fds: FakeDataService) { }

  ngOnInit(): void {
    this.scorecards = SCORECARDS;
    this.rounds = ROUNDS.map(r => {return r.name});
  }

  public showScorecardDetails(scorecard: ScoreCard) {
    this.router.navigate(['/scorecard-details', scorecard.id]);
  }

  public addFakeRound(round: string) {
    console.log("Adding: " + round);
    this.fds.createScoreCard(round);
  }
}
