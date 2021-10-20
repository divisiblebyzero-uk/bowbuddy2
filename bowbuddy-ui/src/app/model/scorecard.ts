import { Distance, Measurement } from "./round";

export interface ScoreCard {
    id: string,
    archer: string,
    bowType: string,
    ageGroup: string,
    gender: string,
    date: Date,
    round: string,
    distanceTotals: DistanceTotal[],
    score?: number,
    hits?: number,
    golds?: number,
    xes?: number,
    handicap?: number
}

export interface DistanceTotal {
    distance: Measurement,
    dozens: Dozen[],
    hits?: number,
    score?: number,
    golds?: number,
    xes?: number
}

export interface Dozen {
    ends: End[],
    hits?: number,
    score?: number,
    golds?: number,
    xes?: number,
    runningTotal?: number
}

export interface End {
    scores: string[],
    endTotal?: number
}

export const SCORECARDS: ScoreCard[] = [
];

