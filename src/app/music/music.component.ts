import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, withLatestFrom, takeWhile } from 'rxjs/operators';
// app
import { AppState } from '../app.module';

import * as MusicActions from './+state/music.action';
import {
  selectMusicCount,
  selectIds,
  selectAllTunes,
  selectCountAndMusic,
  selectCountWithLatestFromTunes,
  getLatestTunes
} from './+state/music.selector';

@Component({
  selector: 'app-music',
  template: `
    <div class="music-title"> Music Component </div>
    <button (click)='addCount()'> add count </button>
    <button (click)='addJobs()'> add tunes </button>
    <button (click)='updateJobOne()'> update tune 1 if exist </button>
  `,
  styles: [``]
})
export class MusicComponent implements OnInit, OnDestroy {
  private alive = true;

  constructor(public store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.pipe(select(selectMusicCount), takeWhile(() => this.alive)).subscribe(count => {
      console.log('this is the count: ', count);
    });

    this.store.pipe(select(selectIds), takeWhile(() => this.alive)).subscribe(ids => {
      console.log('this is the tunes ids: ', ids);
    });

    this.store.pipe(select(selectAllTunes), takeWhile(() => this.alive)).subscribe(tunes => {
      console.log('this is the tunes: ', tunes);
    });

    this.store.pipe(select(selectCountAndMusic), takeWhile(() => this.alive)).subscribe(countAndMusic => {
      console.log('this is the countAndMusic: ', countAndMusic);
    });

    this.store.pipe(
      select(selectCountWithLatestFromTunes),
      takeWhile(() => this.alive),
      withLatestFrom(
        this.store.pipe(
          select(selectAllTunes)
        )
      )
    )
    .subscribe(([a, b]) => {
      console.log('this is the count with latest from tunes: ', a, b);
    });
  }

  addJobs() {
    console.log('---------ADD Tunes');
    this.store.dispatch(new MusicActions.AddTunes());
  }

  addCount() {
    console.log('---------ADD count');
    this.store.dispatch(new MusicActions.IncrementAction());
  }

  updateJobOne() {
    console.log('---------UPDATE tune one');
    this.store.dispatch(new MusicActions.UpdateTuneById());
  }

  public ngOnDestroy() {
    this.alive = false;
  }
}
