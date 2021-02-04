import { Component, OnInit } from "@angular/core";
import { Workout } from "src/app/workouts/workout";
import { isRun, WorkoutType } from "src/app/workouts/workout-type";
import { Run } from "src/app/workouts/run";
import { NonRun } from "src/app/workouts/non-run";

interface Week {
  goal?: string;
  week: (Run | NonRun)[][];
}

@Component({
  selector: "weeks",
  templateUrl: "./weeks.component.html",
  styleUrls: ["./weeks.component.scss"],
})
export class WeeksComponent implements OnInit {
  weeks: Week[] = [
    {
      week: [
        [
          // monday
          new Run(WorkoutType.EASY, 3, "Millenium Park Group Run"),
          new NonRun(WorkoutType.YOGA_STRETCHING, "Yoga with Adriene"),
        ],
        [
          // tuesday
          new Run(WorkoutType.INTERVALS, 3, "800 repeats"),
        ],
        [
          //wednesday
          new NonRun(WorkoutType.CROSS_TRAINING, "Bike or Lift"),
        ],
        [
          //thursday
          new NonRun(WorkoutType.STRENGTH_TRAINING),
        ],
        [
          //friday
          new Run(WorkoutType.TEMPO, 4, "@ 7 min/mile"),
        ],
        [
          //saturday
          new NonRun(WorkoutType.CROSS_TRAINING, "Bike"),
        ],
        [
          // sunday
          new Run(WorkoutType.LONG, 10, "Zone 2 Training", {
            by: 1,
            until: 20,
          }),
        ],
      ],
    },
  ];

  deleteWeek(index: number) {
    this.weeks.splice(index, 1);
  }

  addWeek(oldWeek: Week) {
    const newWeek = { week: [] };

    for (const week of oldWeek.week) {
      const day = [];

      for (const workout of week) {
        let newWorkout;

        if (workout instanceof Run) {
          newWorkout = new Run(
            workout.type,
            workout.miles,
            workout.details,
            workout.increase
          );

          if (newWorkout.increase) {
            const newNumber = workout.miles + workout.increase.by;

            if (
              !workout.increase.until ||
              workout.increase.until >= newNumber
            ) {
              newWorkout.miles = newNumber;
            }
          }
        } else {
          newWorkout = new NonRun(workout.type, workout.details);
        }

        day.push(newWorkout);
      }

      newWeek.week.push(day);
    }

    this.weeks.push(newWeek);
  }

  constructor() {}

  ngOnInit() {}
}
