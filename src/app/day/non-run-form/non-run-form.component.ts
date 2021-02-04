import { Component, Input, OnInit, Output } from "@angular/core";
import { Run } from "src/app/workouts/run";
import { EventEmitter } from "@angular/core";
import { NonRun } from "src/app/workouts/non-run";
import { NonRuns, nonRuns } from "src/app/workouts/workout-type";

@Component({
  selector: "app-non-run-form",
  templateUrl: "./non-run-form.component.html",
  styleUrls: ["./non-run-form.component.scss"],
})
export class NonRunFormComponent implements OnInit {
  @Output() savedChanges: EventEmitter<NonRun> = new EventEmitter();
  @Input() workout: NonRun;

  miles: number;
  details: string;
  increaseToggle: boolean;
  increase: number;
  until: number;
  type: NonRuns;
  workoutTypes = nonRuns;

  constructor() {}

  onSaveChanges() {
    const newWorkout = new NonRun(this.type, this.details);  
    this.savedChanges.emit(newWorkout);
  }

  ngOnInit() {
    this.miles = this.workout.miles;
    this.details = this.workout.details || "";
    this.type = this.workout.type;
  }
}
