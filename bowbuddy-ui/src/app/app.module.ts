import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RoundDetailsComponent } from './components/round-details/round-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundsComponent,
    WelcomeComponent,
    RoundDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
