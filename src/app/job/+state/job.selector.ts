import { createSelector } from '@ngrx/store';
// app
import { JobState } from './job.reducer';

export const selectJobFeature = (state: JobState) => state;

export const selectJobCount = createSelector(
  selectJobFeature,
  (state: JobState) => state.count
);
