import { Action } from '@ngrx/store';

export const INCREMENT = '[job] Increment';
export const ADD_JOBS = '[job] add jobs';
export const UPDATE_JOB_BY_ID = '[job] Increment';

export class IncrementAction implements Action {
  public readonly type = INCREMENT;
}

export class AddJobs implements Action {
  public readonly type = ADD_JOBS;
}

export class UpdateJobById implements Action {
  public readonly type = UPDATE_JOB_BY_ID;
}

export type All = IncrementAction | AddJobs | UpdateJobById;
