import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
// app
import * as MusicActions from './music.action';

export interface Tune {
  id: number;
  name: string;
}

export interface MusicState extends EntityState<Tune> {
  count: number;
  selectedTuneId: number | undefined;
}

export const tunesAdapter = createEntityAdapter<Tune>({
  selectId: (tune: Tune) => tune.id,
  sortComparer: false
});

export const initialState: MusicState = tunesAdapter.getInitialState({
  count: 0,
  selectedTuneId: undefined
});

export function musicReducer(state = initialState, action: Action) {
  switch (action.type) {
    case MusicActions.INCREMENT:
      return { ...state, count: state.count + 1 };

    case MusicActions.ADD_TUNES:
      return tunesAdapter.addMany(
        [
          {
            id: state.ids.length > 0 ? state.ids.length : 0,
            name: 'name#' + new Date()
          }
        ],
        state
      );

    case MusicActions.UPDATE_TUNE_BY_ID:
      if (state.ids.length === 0) {
        return state;
      }
      return tunesAdapter.updateOne(
        {
          id: 0,
          changes: {
            name: 'newname#' + new Date()
          }
        },
        state
      );
    default:
      return state;
  }
}
