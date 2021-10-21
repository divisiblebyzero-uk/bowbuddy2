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

  public scorecardsByDate: {date: string, scorecards: ScoreCard[]}[] = [];
  public scorecardDates: string[] = [];

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
        date.setDate(date.getDate() - Math.floor(Math.random()*2));
        this.fds.createScoreCard(roundName, new Date(date));
      }
    }

    this.refreshScorecards();
  }

  public getScorecardsByDate(dateString: string): ScoreCard[] {
    return this.scorecardsByDate.find(s => {return s.date == dateString})!?.scorecards;
  }
  
  refreshScorecards() {
    this.scorecards = [...SCORECARDS].sort((a,b) => { return b.date.valueOf() - a.date.valueOf() });

    this.scorecardsByDate = [];
    this.scorecardDates = [];


    this.scorecards.forEach(s => {
      const specimenDate = s.date.toDateString();
      let scorecardList: ScoreCard[];
      if (!this.scorecardsByDate.find(sbd => {return sbd.date == specimenDate})) {
        scorecardList = [];
        const scorecardRecord = {date: specimenDate, scorecards: scorecardList};
        this.scorecardsByDate.push(scorecardRecord);
        this.scorecardDates.push(specimenDate);
      } else {
        const potential = this.scorecardsByDate.find(sbd => {return sbd.date == specimenDate})?.scorecards;
        if (potential) {
          scorecardList = potential;
        } else {
          scorecardList = [];
        }
      }
      scorecardList.push(s);
    });

  }

  public showScorecardDetails(scorecard: ScoreCard) {
    this.router.navigate(['/scorecard-details', scorecard.id]);
  }

  public addFakeRound(round: string) {
    console.log("Adding: " + round);
    this.fds.createScoreCard(round);
    this.refreshScorecards();
  }
}
