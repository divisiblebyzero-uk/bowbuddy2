import { Injectable } from '@angular/core';
import { createImmediatelyInvokedFunctionExpression } from 'typescript';
import { Distance, Round } from '../model/round';

@Injectable({
  providedIn: 'root'
})
export class HandicapCalculationService {

  private handicapTables: Map<string, Map<number, number>> = new Map<string, Map<number, number>>();

  constructor() { }

  public getHandicapForScore(round: Round, score: number): number {
    const handicapTable = this.getHandicapTable(round);
    for (let i = 0; i < 101; i++) {
      if (handicapTable.has(i) && handicapTable.get(i)! <= score) {
        return i;
      }
    }
    return 100;
  }

  public getHandicapTable(round: Round): Map<number, number> {
    const potentialTable = this.handicapTables.get(round.name);
    if (potentialTable) {
      return potentialTable;
    } else {
      const newTable = new Map<number, number>();
      for (let i = 0; i < 101; i++) {
        newTable.set(i, this.calculateScoreForHandicap(i, round));
      }    
      this.handicapTables.set(round.name, newTable);
      return newTable;
    }
  }

  private calculateScoreForHandicap(handicap: number, round: Round): number {
    var runningTotal = 0;
    round.distances.forEach(distance => runningTotal += Math.round(distance.arrows * this.calculateScoreForHandicapAndDistance(handicap, distance, round.scoringType)));
    return runningTotal;
  }

  private calculateScoreForHandicapAndDistance(handicap: number, distance: Distance, scoringType: string): number {
    const rootMeanSquare = this.getRootMeanSquare(handicap, distance);
    let averageScore = 0;

    if (scoringType == 'Imperial') {
      for (let i = 1; i <= 4; i++) {
        averageScore += Math.exp(-Math.pow(i * distance.faceSize.inMetres()*100 / 10.0 + 0.357, 2.0) / Math.pow(rootMeanSquare, 2.0));
      }
      return 9.0 - 2.0 * averageScore - Math.exp(-Math.pow((distance.faceSize.inMetres()*100) / 2.0 + 0.357, 2.0) / Math.pow(rootMeanSquare, 2.0));

    } else if (scoringType == 'Metric') {
      for (let i = 1; i <= 10; i++) {
        averageScore += Math.exp(-Math.pow((i * distance.faceSize.inMetres()*100 / 20.0) + 0.357, 2.0) / Math.pow(rootMeanSquare, 2.0));
      }
      return 10-averageScore;
    }
    console.log("Unknown scoring style");
    return 0;
  }

  private getRootMeanSquare(handicap: number, distance: Distance): number {
    const rangeInMetres: number = distance.length.inMetres();

    return 100.0 * rangeInMetres * Math.pow(1.036, 12.9 + handicap) * 5.0 * Math.pow(10.0, -4.0) * (1.0 + 1.429 * Math.pow(10.0, -6.0) * Math.pow(1.07, 4.3 + handicap) * Math.pow(rangeInMetres, 2.0));

  }

}
