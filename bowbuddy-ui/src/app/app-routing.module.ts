import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoundDetailsComponent } from './components/round-details/round-details.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'rounds', component: RoundsComponent},
  { path: 'round-details/:name', component: RoundDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
