import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// app
import * as JobActions from './+state/job.action';
import { selectJobCount } from './+state/job.selector';

@Component({
  selector: 'app-job',
  template: `
    <div> Job Component </div>
  `,
  styles: [``]
})
export class JobComponent implements OnInit {
  constructor(public store: Store<{count: number}>) {
  }

  ngOnInit() {
    this.store.dispatch(new JobActions.IncrementAction());

    this.store.select(selectJobCount).subscribe(count => {
      console.log('this is the job: ', count);
    });
  }
}
