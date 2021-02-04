import { Component, Input, OnInit } from "@angular/core";
import { NonRun } from "../workouts/non-run";
import { Run } from "../workouts/run";
import { Workout } from "../workouts/workout";
import { WorkoutType } from "../workouts/workout-type";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

@Component({
  selector: "day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.scss"],
})
export class DayComponent implements OnInit {
  @Input() dayIndex: number;
  @Input() workouts: Workout[];

  dayName: string;
  constructor() {
    console.log(this.dayIndex)
    this.workouts = [];
  }

  addRun() {
    this.workouts.push(new Run(WorkoutType.EASY, 3));
  }

  addNonRun() {
    this.workouts.push(new NonRun(WorkoutType.CROSS_TRAINING));
  }

  onAdd(workout: Workout) {
    this.workouts.push(workout);
  }

  onEdit(workout: Workout, index: number) {
    if (workout) {
      this.workouts.splice(index, 1, workout);
    } else {
      this.workouts.splice(index, 1);
    }
  }

  onDelete(workoutIndex: number) {
    this.workouts.splice(workoutIndex, 1);
  }

  ngOnInit() {
    this.dayName = days[this.dayIndex];
  }
}
