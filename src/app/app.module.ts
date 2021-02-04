import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { WorkoutDisplayComponent } from './day/workout-display/workout-display.component';
import { WeekComponent } from './weeks/week/week.component';
import { RunFormComponent } from './day/run-form/run-form.component';
import { NonRunFormComponent } from './day/non-run-form/non-run-form.component';
import { FormsModule } from '@angular/forms';
import { WeeksComponent } from './weeks/weeks.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    WorkoutDisplayComponent,
    WeekComponent,
    RunFormComponent,
    NonRunFormComponent,
    WeeksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
