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

  public scorecardsByDate: Map<string, ScoreCard[]> = new Map<string, ScoreCard[]>();
  public scorecardDates!: IterableIterator<string>;

  public rounds!: string[];

  constructor(private router: Router, private fds: FakeDataService) { }

  public getDate(input: string): Date {
    return new Date(input);
  }

  ngOnInit(): void {
    this.rounds = ROUNDS.map(r => {return r.name});

    if (SCORECARDS.length < 2) {
      const date = new Date();
      for (let i = 0; i < 10; i++) {
        const roundName = this.rounds[Math.floor(Math.random()*this.rounds.length)];
        date.setDate(date.getDate() - Math.floor(Math.random()*7));
        this.fds.createScoreCard(roundName, new Date(date));
      }
    }


    this.scorecards = [...SCORECARDS].sort((a,b) => { return b.date.getDate() - a.date.getDate() });

    this.scorecards.forEach(s => {
      const specimenDate = s.date.toDateString();
      let scorecardList: ScoreCard[];
      if (!this.scorecardsByDate.has(specimenDate)) {
        scorecardList = [];
        this.scorecardsByDate.set(specimenDate, scorecardList);
      } else {
        const potential = this.scorecardsByDate.get(specimenDate);
        if (potential) {
          scorecardList = potential;
        } else {
          scorecardList = [];
        }
      }

      scorecardList.push(s);
    });

    this.scorecardDates = this.scorecardsByDate.keys();
  }

  public showScorecardDetails(scorecard: ScoreCard) {
    this.router.navigate(['/scorecard-details', scorecard.id]);
  }

  public addFakeRound(round: string) {
    console.log("Adding: " + round);
    this.fds.createScoreCard(round);
  }
}
