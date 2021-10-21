import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundDetailsComponent } from './components/round-details/round-details.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { ScoreCardDisplayComponent } from './components/score-card-display/score-card-display.component';
import { ScoreCardEditComponent } from './components/score-card-edit/score-card-edit.component';
import { ScoreCardNewSummaryComponent } from './components/score-card-new-summary/score-card-new-summary.component';
import { ScoreCardSelectorComponent } from './components/score-card-selector/score-card-selector.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'rounds', component: RoundsComponent},
  { path: 'round-details/:name', component: RoundDetailsComponent},
  { path: 'scorecards', component: ScoreCardSelectorComponent},
  { path: 'scorecard-details/:id', component: ScoreCardDisplayComponent},
  { path: 'scorecard-new', component: ScoreCardNewSummaryComponent},
  { path: 'scorecard-edit/:id', component: ScoreCardEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
