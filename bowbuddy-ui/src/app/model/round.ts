export class Round {
    name: string;
    venue: string;          // Indoor or Outdoor
    scoringType: string;    // Metric or Imperial
    distances: Distance[];

    constructor(
        name: string,
        venue: string,
        scoringType: string,
        distances: Distance[]) {

        this.name = name;
        this.venue = venue;
        this.scoringType = scoringType;
        this.distances = distances;
    }
}

export class Distance {
    length: Measurement;
    arrows: number;
    faceSize: Measurement;

    constructor(
        length: Measurement,
        arrows: number,
        faceSize: Measurement
    ) {
        this.length = length;
        this.arrows = arrows;
        this.faceSize = faceSize;
    }
}

export class Measurement {
    value: number;
    units: string;          // cm, m, yd or in
    displayString: string;

    constructor (
        value: number,
        units: string
    ) {
        this.value = value;
        this.units = units;
        this.displayString = '${value} ${units}';
    }

    public inMetres(): number {
        switch(this.units) {
            case 'cm':
                return this.value / 100;
            case 'm':
                return this.value;
            case 'yd':
                return this.value * 0.9144;
            case 'in':
                return this.value * 0.0254;
            default:
                console.log('Unknown units ${Units}');
                return 0;
            }
    }
}
export const ROUNDS: Round[] = [
    new Round('Portsmouth', 'Indoor', 'Metric', [new Distance(new Measurement(20, 'yd'), 60, new Measurement(60, 'cm'))]),
    new Round('Frostbite', 'Outdoor', 'Metric', [new Distance(new Measurement(30, 'm'), 36, new Measurement(80, 'cm'))]),
    
];
