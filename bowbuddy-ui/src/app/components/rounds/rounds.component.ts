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
  height!: number;
  width!: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

  showDetails(round: Round): void {
    this.router.navigate(['/round-details', round.name]);
  }

}
