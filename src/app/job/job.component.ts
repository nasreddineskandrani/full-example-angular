import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

class IncrementAction {
  type = 'INCREMENT';
}

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
    this.store.dispatch(new IncrementAction());
  }
}
