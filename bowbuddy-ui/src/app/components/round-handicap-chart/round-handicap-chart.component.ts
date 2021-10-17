import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Round, ROUNDS } from 'src/app/model/round';
import { HandicapCalculationService } from 'src/app/service/handicap-calculation-service.service';

@Component({
  selector: 'app-round-handicap-chart',
  templateUrl: './round-handicap-chart.component.html',
  styleUrls: ['./round-handicap-chart.component.scss']
})
export class RoundHandicapChartComponent implements OnInit {


  round!: Round;
  handicapTable!: Map<number, number>;

  constructor(private route: ActivatedRoute, private hcs: HandicapCalculationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const round = ROUNDS.find(r => r.name == params['name']);
      if (round) {
        this.round = round;
        this.handicapTable = this.hcs.getHandicapTable(round);
        this.lineChartLabels = [];
        const data: number[] = [];

        this.handicapTable.forEach((value: number, key: number) => {
          this.lineChartLabels.push('' + key);
          data.push(value);
        });
        this.handicapData = [ {data: data }];


      }
    })
  }

  public handicapData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];

  public lineChartOptions: (ChartOptions & { responsive: any }) = {
    responsive: true,
    legend: { display: false },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Handicap'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Score'
        }
      }],
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];

  public lineChartLegend = true;
  public lineChartType = "line" as ChartType;
  public lineChartPlugins = [];
}
