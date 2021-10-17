import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RoundDetailsComponent } from './components/round-details/round-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';
import { RoundHandicapChartComponent } from './components/round-handicap-chart/round-handicap-chart.component';
import { ScoreCardSelectorComponent } from './components/score-card-selector/score-card-selector.component';
import { ScoreCardDisplayComponent } from './components/score-card-display/score-card-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundsComponent,
    WelcomeComponent,
    RoundDetailsComponent,
    RoundHandicapChartComponent,
    ScoreCardSelectorComponent,
    ScoreCardDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
