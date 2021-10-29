import { Injectable } from '@angular/core';
import { IdService } from './id-service.service';
import { DistanceTotal, SCORECARDS } from '../model/scorecard';
import { ScoreCalculationService } from './score-calculation.service';
import { Measurement, Round, ROUNDS } from '../model/round';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor(private idService: IdService, private scs: ScoreCalculationService) { }

  private createEnd(round: Round): string[] {
    const end = [];
    const allowableScores = this.scs.getAllowableScores(round);
    let index = 0;
    for (let i = 0; i < 6; i++) {
      index = index + (Math.floor(Math.random() * 3));
      if (index >= allowableScores.length) {
        index = allowableScores.length - 1;
      }
      end.push(allowableScores[index]);
    }
    return end;
  }


  public createScoreCard(roundName: string, date: Date = new Date()) {
    const round = ROUNDS.find(r => r.name == roundName);
    if (round) {

      const distanceTotals: DistanceTotal[] = [];
      round.distances.forEach(d => {
        const dozensCount = d.arrows / 12;
        const dozens = [];

        for (let i = 0; i < dozensCount; i++) {
          dozens.push({
            ends: [{ scores: this.createEnd(round) }, { scores: this.createEnd(round) }]
          });
        }

        distanceTotals.push(
          {
            distance: d.length,
            dozens: dozens
          }
        )
      });
      const scoreCard = 
      { 
        id: this.idService.getNewId(),
        archer: 'Joe Bloggs',
        bowType: 'Recurve', 
        ageGroup: 'Senior', 
        gender: 'Male', 
        date: date, 
        round: round.name, 
        distanceTotals: distanceTotals
      }
      this.scs.calculate(scoreCard);
      SCORECARDS.push(scoreCard);
    } else {
      console.log("Unknown round: " + roundName);
    }
  }
}
