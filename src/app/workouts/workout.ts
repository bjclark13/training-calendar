import { WorkoutType } from "./workout-type";

export interface Workout {
  details?: string;
  miles: number;
  type: WorkoutType;
}

