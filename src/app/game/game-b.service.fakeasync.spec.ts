import { TestBed } from '@angular/core/testing';

import { GameBService } from './game-b.service';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

describe('game-b.service.fakeasync', () => {
  let gameBService: GameBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameBService, HeroService]
    });

    gameBService = TestBed.get(GameBService);
  });

  describe('play()', () => {
    it('should be able to play', () => {
      const firstHero: Hero = {
        level: 44,
        fly: false,
        swim: false
      };
      const heroes = [firstHero];
      expect(gameBService.play(heroes)).toEqual(true);
    });

    it('should not be able to play when no hero', () => {
      const heroes: any = [];
      expect(gameBService.play(heroes)).toEqual(false);
    });
  });
});
