import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-game',
  template: `
    <div class="game-title"> Game Component </div>
  `,
  styles: [``]
})
export class GameComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  constructor(public heroService: HeroService) {}

  ngOnInit() {}

  public ngOnDestroy() {
    this.destroyed$.next();
  }
}
