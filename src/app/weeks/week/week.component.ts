import { Component, Input, OnInit } from "@angular/core";
import { Workout } from "src/app/workouts/workout";
import { Run } from "../../workouts/run";
import { NonRun } from "../../workouts/non-run";
import { WorkoutType } from "../../workouts/workout-type";

@Component({
  selector: "week",
  templateUrl: "./week.component.html",
  styleUrls: ["./week.component.scss"],
})
export class WeekComponent implements OnInit {
  @Input() week: Workout[][];

  constructor() {
  }

  getTotalMiles() {
    let totalMiles = 0;

    for(let day of this.week) {
      for (let workout of day) {
        totalMiles += workout.miles;
      }
    }

    return totalMiles;
  }

  ngOnInit() {
    console.log(this.week);
  }
}
