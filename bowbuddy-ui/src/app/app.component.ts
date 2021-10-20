import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bowbuddy-ui';
  isMenuCollapsed: boolean = false;
  isMobilePortrait: boolean = false;

  ngOnInit(): void {
    this.calcWidth();
  }


  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.calcWidth();
  }

  private calcWidth() {
    this.isMobilePortrait = window.innerWidth < 684;
  }

}
