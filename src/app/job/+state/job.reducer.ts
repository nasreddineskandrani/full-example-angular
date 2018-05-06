import { Action } from '@ngrx/store';
// app
import * as JobActions from './job.action';

export interface JobState {
  count: number;
}

export const initialState: JobState = {
  count: 0
};

export function jobReducer(state = initialState, action: Action) {
  switch (action.type) {
    case JobActions.INCREMENT:
      return {...state, count: state.count + 1};
    default:
      return state;
  }
}
