import { Injectable } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Injectable()
export class GameBService {
  constructor(private heroService: HeroService) {}

  play(heroes: Hero[]) {
    console.log(this.heroService.blabla());
    const maxLevel = this.heroService.computeMaxLevel(heroes);
    if (maxLevel) {
      return true;
    }
    return false;
  }
}
