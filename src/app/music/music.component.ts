import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

class IncrementAction {
  type = 'INCREMENT';
}

@Component({
  selector: 'app-music',
  template: `
    <div> Music Component </div>
  `,
  styles: [``]
})
export class MusicComponent implements OnInit  {
  constructor(public store: Store<{count: number}>) {
  }

  ngOnInit() {
    this.store.dispatch(new IncrementAction());
  }
}
