export enum WorkoutType {
  CROSS_TRAINING = "Cross Training",
  INTERVALS = "Interval",
  STRENGTH_TRAINING = "Strength Training",
  TEMPO = "Tempo Run",
  EASY = "Easy Run",
  LONG = "Long Run",
  HILLS = "Hill Sprints",
  YOGA_STRETCHING = "Yoga or Stretching",
}

export const nonRuns = [
  WorkoutType.CROSS_TRAINING,
  WorkoutType.STRENGTH_TRAINING,
  WorkoutType.YOGA_STRETCHING,
] as const;

export type NonRuns = typeof nonRuns[number];

export const runs = [
  WorkoutType.EASY,
  WorkoutType.HILLS,
  WorkoutType.INTERVALS,
  WorkoutType.LONG,
  WorkoutType.TEMPO,
] as const;

export type Runs = typeof runs[number];

export const isRun = (type: string) => {
  for (let run of runs) {
    if (type === run) {
      return true;
    }
  }

  return false;
};
