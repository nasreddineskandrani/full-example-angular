import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

interface DataResponse {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
  description: string;
  count: number;
}

@Component({
  selector: 'app-game',
  template: `
    <div class="game-title"> Game Component </div>
  `,
  styles: [``]
})
export class GameComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.quickTestGetSetUndefined().subscribe(response => {
      // console.log(response);
      // console.log(response.description);
    });

    this.quickTestOptionnalSetUndefined('title A');
    this.quickTestOptionnalSetUndefined();
    /*
    const a: number = undefined;
    const b: number = null;
    this.quickTestSetUndefined(undefined);
    this.quickTestSetUndefined(null);
    this.quickTestSetUndefined();
    */
  }

  public ngOnDestroy() {
    this.destroyed$.next();
  }

  quickTestGetSetUndefined() {
    // now returns an Observable of Config
    return this.http.get<DataResponse>('https://jsonplaceholder.typicode.com/todos/1');
  }

  quickTestOptionnalSetUndefined(title?: string) {
    console.log(title);
  }

  quickTestSetUndefined(title: string) {
    console.log(title);
  }
}
