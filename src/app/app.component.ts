import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

class TestAction {
  type = 'test';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public store: Store<{count: number}>) {
  }

  ngOnInit() {
    // this.store.dispatch(new TestAction());
  }
}
