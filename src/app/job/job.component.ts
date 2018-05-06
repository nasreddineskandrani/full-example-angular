import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, withLatestFrom, takeWhile } from 'rxjs/operators';
// app
import { AppState } from '../app.module';

import * as JobActions from './+state/job.action';
import {
  selectJobCount,
  selectJobs,
  selectCountAndJobs,
  selectCountWithLatestFromJobs,
  combineLatestTest,
  zipTest,
  getLatestJobs
} from './+state/job.selector';

@Component({
  selector: 'app-job',
  template: `
    <div class="job-title"> Job Component </div>
    <button (click)='addCount()'> add count </button>
    <button (click)='addJobs()'> add jobs </button>
  `,
  styles: [``]
})
export class JobComponent implements OnInit, OnDestroy {
  private alive = true;

  constructor(public store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select(selectJobCount).pipe(takeWhile(() => this.alive)).subscribe(count => {
      console.log('this is the count: ', count);
    });

    this.store.select(selectJobs).pipe(takeWhile(() => this.alive)).subscribe(jobs => {
      console.log('this is the jobs: ', jobs);
    });

    this.store.select(selectCountAndJobs).pipe(takeWhile(() => this.alive)).subscribe(jobs => {
      console.log('this is the jobs: ', jobs);
    });

    combineLatestTest(this.store).pipe(takeWhile(() => this.alive)).subscribe(a => {
      console.log('WOUHOU! cl cl ! this is count and jobs: ', a);
    });

    zipTest(this.store).pipe(takeWhile(() => this.alive)).subscribe(a => {
      console.log('WOUHOU! Zip zip! this is count and jobs: ', a);
    });

    this.store.select(selectCountWithLatestFromJobs)
      .pipe(takeWhile(() => this.alive), withLatestFrom(getLatestJobs(this.store)))
      .subscribe(([a, b]) => {
        console.log('this is the count with latest from jobs: ', a, b);
      });
  }

  addJobs() {
    console.log('---------ADD Jobs');
    this.store.dispatch(new JobActions.AddJobs());
  }

  addCount() {
    console.log('---------ADD count');
    this.store.dispatch(new JobActions.IncrementAction());
  }

  public ngOnDestroy() {
    this.alive = false;
  }
}
