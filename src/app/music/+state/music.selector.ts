import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { zip } from 'rxjs/observable/zip';
import { map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
// app
import { tunesAdapter, MusicState, Tune } from './music.reducer';
import { AppState } from '../../app.module';


export const selectMusicFeature = createFeatureSelector<MusicState>('asyncMusic');

export const {
  selectIds,
  selectEntities,
  selectAll: selectAllTunes,
  selectTotal,
} = tunesAdapter.getSelectors(selectMusicFeature);

export const selectMusicCount = createSelector(
  selectMusicFeature,
  (state: MusicState) => state.count
);

export const selectCountAndMusic = createSelector(
  selectMusicCount,
  selectAllTunes,
  (count: number, tunes: Tune[]) => {
    return {count: count, tunes: tunes};
  }
);

export const selectCountWithLatestFromTunes = createSelector(
  selectMusicCount,
  (count: number) => {
    return count;
  }
);

export function getLatestTunes(store): Observable<any> {
  const musicAsync$: Observable<MusicState> = store.select('asyncMusic');
  const tunes$: Observable<any> = musicAsync$.pipe(map(state => state.entities));
  return tunes$;
}

