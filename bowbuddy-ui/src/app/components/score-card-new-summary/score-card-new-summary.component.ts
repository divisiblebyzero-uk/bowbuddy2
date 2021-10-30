import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ROUNDS } from 'src/app/model/round';
import { ScoreCard, SCORECARDS } from 'src/app/model/scorecard';
import { IdService } from 'src/app/service/id-service.service';


@Component({
  selector: 'app-score-card-new-summary',
  templateUrl: './score-card-new-summary.component.html',
  styleUrls: ['./score-card-new-summary.component.scss']
})
export class ScoreCardNewSummaryComponent implements OnInit {

  constructor(private calendar: NgbCalendar, private ids: IdService, private router: Router) { }

  public roundNames!: string[];

  public scorecardSummary!: ScoreCard;

  public dateProxy: NgbDate|undefined;

  public onSubmit() {
    console.log("hello!");
    SCORECARDS.push(this.scorecardSummary);
    this.router.navigate(['/scorecard-edit', this.scorecardSummary.id]);
  }

  public updateDate() {
    if (this.dateProxy) {
      this.scorecardSummary.date = new Date(this.dateProxy.year, this.dateProxy.month - 1, this.dateProxy.day);
    }
  }

  ngOnInit(): void {
    this.roundNames = ROUNDS.map(r => r.name);

    this.scorecardSummary = {
      id: this.ids.getNewId(),
      archer: 'Joe Bloggs',
      round: 'Portsmouth',
      gender: 'Male',
      bowType: 'Recurve',
      date: new Date(),
      distanceTotals: [],
      ageGroup: 'Senior'
    };
    this.dateProxy = this.calendar.getToday();
    this.updateDate();
  }

}
