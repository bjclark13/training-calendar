import { Component, Input, OnInit, Output } from "@angular/core";
import { Run } from "src/app/workouts/run";
import { EventEmitter } from "@angular/core";
@Component({
  selector: "app-run-form",
  templateUrl: "./run-form.component.html",
  styleUrls: ["./run-form.component.scss"],
})
export class RunFormComponent implements OnInit {
  @Output() savedChanges: EventEmitter<Run> = new EventEmitter();
  @Input() workout: Run;

  miles: number;
  details: string;
  increaseToggle: boolean;
  increase: number;
  until: number;

  constructor() {}

  onSaveChanges() {
    const newWorkout = new Run(this.workout.type, this.miles, this.details);

    if (this.increaseToggle) {
      newWorkout.increase = { by: this.increase, until: this.until };
    }

  
    this.savedChanges.emit(newWorkout);
  }

  ngOnInit() {
    this.miles = this.workout.miles;
    this.details = this.workout.details || "";
    this.increaseToggle = !!this.workout.increase;
    if (this.increaseToggle) {
      this.increase = this.workout.increase.by;
      this.until = this.workout.increase.until;
    }
  }
}
