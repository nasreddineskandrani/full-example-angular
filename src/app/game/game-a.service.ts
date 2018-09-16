import { Injectable } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Injectable()
export class GameAService {
  constructor(private heroService: HeroService) {}

  play(heroes: Hero[]) {
    const maxLevel = this.heroService.computeMaxLevel(heroes);
    if (maxLevel > 0) {
      return true;
    }
    return false;
  }
}
