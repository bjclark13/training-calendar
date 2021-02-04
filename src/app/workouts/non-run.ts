import { Workout } from "./workout";
import { NonRuns } from "./workout-type";

export class NonRun implements Workout {
  public miles: number;

  constructor(public type: NonRuns, public details?: string) {
    this.miles = 0;
  }
}
