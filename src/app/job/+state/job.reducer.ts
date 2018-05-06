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
      const newArr = state.jobs.slice(0);
      newArr.push(
        {
          id: (new Date()).getTime(),
          name: 'name#' + new Date()
        }
      );
      return {
        ...state,
        jobs: newArr
      };
    default:
      return state;
  }
}
