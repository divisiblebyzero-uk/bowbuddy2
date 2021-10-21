import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ROUNDS } from 'src/app/model/round';


interface ScorecardSummary {
  archer: string,
  round: string,
  gender: string,
  bowType: string,
  date: Date
}

@Component({
  selector: 'app-score-card-new-summary',
  templateUrl: './score-card-new-summary.component.html',
  styleUrls: ['./score-card-new-summary.component.scss']
})
export class ScoreCardNewSummaryComponent implements OnInit {

  constructor() { }

  public roundNames!: string[];

  public scorecardSummary!: ScorecardSummary;

  public dateProxy: NgbDate|undefined;

  public onSubmit() {
    console.log(this.scorecardSummary);
  }

  public updateDate() {
    if (this.dateProxy) {
      this.scorecardSummary.date = new Date(this.dateProxy.year, this.dateProxy.month - 1, this.dateProxy.day);
    }
  }

  ngOnInit(): void {
    this.roundNames = ROUNDS.map(r => r.name);

    this.scorecardSummary = {
      archer: '',
      round: '',
      gender: '',
      bowType: '',
      date: new Date()
    };
  }

}
