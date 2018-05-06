import { createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { zip } from 'rxjs/observable/zip';
import { map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
// app
import { JobState, Job } from './job.reducer';
import { AppState } from '../../app.module';

export const selectJobFeature = (state: any) => {
  return state.asyncJob;
};

export const selectJobCount = createSelector(
  selectJobFeature,
  (state: JobState) => state.count
);

export const selectJobs = createSelector(
  selectJobFeature,
  (state: JobState) => state.jobs
);

export const selectCountAndJobs = createSelector(
  selectJobCount,
  selectJobs,
  (count: number, jobs: Job[]) => {
    return {count: count, jobs: jobs};
  }
);

export const selectCountWithLatestFromJobs = createSelector(
  selectJobCount,
  // withLatestFrom(selectJobs),
  (count: number) => {
    return count;
  }
);

export function getLatestJobs(store): Observable<any> {
  const jobAsync$: Observable<JobState> = store.select('asyncJob');
  const jobs$: Observable<Job[]> = jobAsync$.pipe(map(state => state.jobs));
  return jobs$;
}

// Some tests with custom selectors
export function combineLatestTest(store): Observable<any> {
  const jobAsync$: Observable<JobState> = store.select('asyncJob');
  const count$: Observable<number> = jobAsync$.pipe(map(state => state.count));
  const jobs$: Observable<Job[]> = jobAsync$.pipe(map(state => state.jobs));
  return combineLatest(count$, jobs$, (count, jobs) => {
    return {count: count, jobs: jobs};
  });
}
export function zipTest(store): Observable<any> {
  const jobAsync$: Observable<JobState> = store.select('asyncJob');
  const count$: Observable<number> = jobAsync$.pipe(map(state => state.count));
  const jobs$: Observable<Job[]> = jobAsync$.pipe(map(state => state.jobs));
  return zip(count$, jobs$, (count, jobs) => {
    return {count: count, jobs: jobs};
  });
}
