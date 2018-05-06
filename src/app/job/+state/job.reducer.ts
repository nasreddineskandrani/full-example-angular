import { Action } from '@ngrx/store';
// app
import * as JobActions from './job.action';

export interface Job {
  id: number;
  name: string;
}
export interface JobState {
  count: number;
  jobs: Job[];
}

export const initialState: JobState = {
  count: 0,
  jobs: []
};

export function jobReducer(state = initialState, action: Action) {
  switch (action.type) {
    case JobActions.INCREMENT:
      return {...state, count: state.count + 1};
    case JobActions.ADD_JOBS:
      const newJobs = state.jobs.slice(0); // clone
      newJobs.push(
        {
          id: state.jobs.length > 0 ? state.jobs.length + 1 : 0,
          name: 'name#' + new Date()
        }
      );
      return {
        ...state,
        jobs: newJobs
      };

    case JobActions.UPDATE_JOB_BY_ID:
      if (state.jobs.length === 0) {
        return state;
      }
      const jobsToUpdate = state.jobs.slice(0); // clone
      jobsToUpdate[0].name = 'newname#' + new Date();
      return {
        ...state,
        jobs: jobsToUpdate
      };
    default:
      return state;
  }
}
