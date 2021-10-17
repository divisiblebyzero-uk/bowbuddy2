import { Injectable } from '@angular/core';
import { IdService } from './id-service.service';
import { SCORECARDS } from '../model/scorecard';
import { ScoreCalculationService } from './score-calculation.service';
import { Measurement } from '../model/round';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor(private idService: IdService, private scs: ScoreCalculationService) { }

  public createScoreCards() {
    const scoreCard = 
      { 
        id: this.idService.getNewId(),
        archer: 'Joe Bloggs',
        bowType: 'Recurve', 
        ageGroup: 'Adult', 
        gender: 'Male', 
        date: new Date(), 
        round: 'Portsmouth', 
        distanceTotals: [{
            distance: new Measurement(50, 'yd'),
            dozens: [{
                ends: [
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                    {scores: ['9', '9', '9', '9', '9', '9']},
                ]
            }]
        }]
       };
    this.scs.calculate(scoreCard);
      SCORECARDS.push(scoreCard);
  }
}
