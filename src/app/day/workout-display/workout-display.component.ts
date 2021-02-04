import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Workout } from "src/app/workouts/workout";
import { isRun } from "../../workouts/workout-type";

@Component({
  selector: "workout-display",
  templateUrl: "./workout-display.component.html",
  styleUrls: ["./workout-display.component.scss"],
})
export class WorkoutDisplayComponent implements OnInit {
  @Input() workout: Workout;
  @Output() onEdit: EventEmitter<Workout> = new EventEmitter<Workout>();

  isRun: boolean;

  showForm: boolean = false;

  constructor() {
  }

  onSave(workout: Workout) {
      this.onEdit.emit(workout);
  }

  onDelete() {
    this.onEdit.emit(null);
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit() {
    this.isRun = isRun(this.workout.type);
  }
}
