import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUNDS, Round } from 'src/app/model/round';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
})
export class RoundsComponent implements OnInit {

  rounds: Round[] = ROUNDS;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(round: Round): void {
    this.router.navigate(['/round-details', round.name]);
  }

}
