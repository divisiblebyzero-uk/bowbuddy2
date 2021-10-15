import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Round, ROUNDS } from 'src/app/model/round';
import { HandicapCalculationServiceService } from 'src/app/service/handicap-calculation-service.service';


@Component({
  selector: 'app-round-details',
  templateUrl: './round-details.component.html',
  styleUrls: ['./round-details.component.scss']
})
export class RoundDetailsComponent implements OnInit {

  round!: Round;
  handicapTable!: Map<number, number>;

  constructor(private route: ActivatedRoute, private hcs: HandicapCalculationServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const round = ROUNDS.find(r => r.name == params['name']);
      if (round) {
        this.round = round;
        this.handicapTable = this.hcs.getHandicapTable(round);
      }
    })
  }

}
