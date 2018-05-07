import { Action } from '@ngrx/store';

export const INCREMENT = '[music] Increment';
export const ADD_TUNES = '[music] add tunes';
export const UPDATE_TUNE_BY_ID = '[music] Update Tune By ID';

export class IncrementAction implements Action {
  public readonly type = INCREMENT;
}

export class AddTunes implements Action {
  public readonly type = ADD_TUNES;
}

export class UpdateTuneById implements Action {
  public readonly type = UPDATE_TUNE_BY_ID;
}

export type All = IncrementAction | AddTunes | UpdateTuneById;
