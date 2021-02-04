import { Workout } from "./workout";
import { Runs } from "./workout-type";

interface Increase {
  by: number;
  until?: number;
}

export class Run implements Workout {
  public isRun = true;
  constructor(
    public type: Runs,
    public miles: number,
    public details?: string,
    public increase?: Increase
  ) {
    this.type = type;
  }
}
