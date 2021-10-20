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

const scoreCards: ScoreCard[] = [

];



export const SCORECARDS: ScoreCard[] = [
    { 
        id: '1', 
        archer: 'Joe Bloggs',
        bowType: 'Recurve', 
        ageGroup: 'Adult', 
        gender: 'Male', 
        date: new Date(), 
        round: 'Portsmouth', 
        distanceTotals: [{
            distance: new Measurement(50, 'yd'),
            dozens: [
                {
                    ends: [
                        {scores: ['10', '10', '9', '9', '9', '9']},
                        {scores: ['9', '9', '9', '9', '9', 'M']},
                    ]
                },
                {
                    ends: [
                        {scores: ['9', '9', '9', '9', '9', '9']},
                        {scores: ['9', '9', '9', '9', '9', '9']},
                    ]
                },
                {
                    ends: [
                        {scores: ['9', '9', '9', '9', '9', '9']},
                        {scores: ['9', '9', '9', '9', '9', '9']},
                    ]
                },
                {
                    ends: [
                        {scores: ['9', '9', '9', '9', '9', '9']},
                        {scores: ['9', '9', '9', '9', '9', '9']},
                    ]
                },
                {
                    ends: [
                        {scores: ['9', '9', '9', '9', '9', '9']},
                        {scores: ['9', '9', '9', '9', '9', '9']},
                    ]
                },
            ]
        }]
    }
];

