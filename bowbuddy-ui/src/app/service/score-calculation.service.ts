import { Injectable } from '@angular/core';
import { ROUNDS } from '../model/round';
import { ScoreCard } from '../model/scorecard';
import { HandicapCalculationService } from './handicap-calculation-service.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreCalculationService {

  constructor(private hcs: HandicapCalculationService) { }

  private convertScoreToNumber(input: string): number {
    if (input == 'M') {
      return 0
    } else if (input == 'X') {
        return 10
      } else {
      return +input;
    }
  }


  private summer = (previousValue: number, currentValue: number) => previousValue + currentValue;
  private count10s = (previousValue: number, currentValue: number) => previousValue + (currentValue==10?1:0);

  public calculate(card: ScoreCard) {
    const goldScore: number = 10;

    card.golds = 0;
    card.hits = 0;
    card.score = 0;
    card.xes = 0;

    card.distanceTotals.forEach(dt => {
      dt.score = 0;
      dt.hits = 0;
      dt.golds = 0;
      dt.xes = 0;
      dt.dozens.forEach(d => {
        d.hits = 0;
        d.golds = 0;
        d.score = 0;
        d.xes=0;
        d.runningTotal = dt.score;
        
        d.ends.forEach(e => {
          const scores = e.scores.map(s => this.convertScoreToNumber(s));
          e.endTotal = scores.reduce(this.summer);
          d.score = d.score?d.score+e.endTotal:e.endTotal;
          d.golds = (d.golds||0) + scores.map(s => {if (s == goldScore) return 1 as number; else return 0;}).reduce(this.summer);
          d.hits = (d.hits||0) + e.scores.map(s => {if (s != 'M') return 1 as number; else return 0;}).reduce(this.summer);
        });

        d.runningTotal = d.runningTotal?d.runningTotal+d.score:d.score;
        dt.score = d.runningTotal;

        dt.golds = dt.golds?dt.golds+d.golds:d.golds;
        dt.hits = dt.hits?dt.hits+d.hits:d.hits;
        dt.xes = dt.xes?dt.xes+d.xes:d.xes;
      });
      card.golds = card.golds?card.golds+dt.golds:dt.golds;
      card.hits = card.hits?card.hits+dt.hits:dt.hits;
      card.score = card.score?card.score+dt.score:dt.score;
      card.xes = card.xes?card.xes+dt.xes:dt.xes;

      const round = ROUNDS.find(r => r.name == card.round);

      if (round) {
        card.handicap = this.hcs.getHandicapForScore(round, card.score);
      }
      
    });
  }
}
