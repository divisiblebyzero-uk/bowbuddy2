import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorebadge',
  templateUrl: './scorebadge.component.html',
  styleUrls: ['./scorebadge.component.scss']
})
export class ScorebadgeComponent implements OnInit {

  @Input() score: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  private getColourClass(): string {
    switch (this.score) {
      case 'X':
        return "gold";
      case '10':
        return "gold";
      case '9':
        return "gold";
      case '8':
        return "red";
      case '7':
        return "red";
      case '6':
        return "blue";
      case '5':
        return "blue";
      case '4':
        return "black";
      case '3':
        return "black";
      case '2':
        return "white";
      case '1':
        return "white";
      case 'M':
        return "miss";
      case '':
        return "blank";
      default:
        return "unknown";
    }
  }

  public getCssClass(): string {
    return `p-1 border rounded-circle archery-circle archery-circle-${this.getColourClass()}`;
  }

}
