import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Round, ROUNDS } from 'src/app/model/round';


@Component({
  selector: 'app-round-details',
  templateUrl: './round-details.component.html',
  styleUrls: ['./round-details.component.scss']
})
export class RoundDetailsComponent implements OnInit {

  round!: Round;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const round = ROUNDS.find(r => r.name == params['name']);
      if (round) {
        this.round = round;
      }
    })
  }

}
