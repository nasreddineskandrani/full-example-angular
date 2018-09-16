import { Injectable } from '@angular/core';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  computeMaxLevel(heroes: Hero[]): number {
    if (heroes.length === 0) {
      // return null; //default
      return -1; //fixed
    }
    return heroes.reduce((maxLevel, hero) => {
      if (hero.level > maxLevel) {
        maxLevel = hero.level;
      }
      return maxLevel;
    }, 0);
  }
}