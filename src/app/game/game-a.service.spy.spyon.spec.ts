import { TestBed } from '@angular/core/testing';

import { GameAService } from './game-a.service';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

describe('game-a.service.spy.2', () => {
  let gameAService: GameAService;
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameAService, HeroService]
    });

    gameAService = TestBed.get(GameAService);
    heroService = TestBed.get(HeroService);
  });

  describe('play()', () => {
    it('should be able to play', () => {
      const firstHero: Hero = {
        level: 44,
        fly: false,
        swim: false
      };

      spyOn(heroService, 'computeMaxLevel').and.returnValue(44);
      spyOn(heroService, 'blabla').and.returnValue('t1');

      const heroes = [firstHero];
      expect(gameAService.play(heroes)).toEqual(true);
    });

    it('should not be able to play when no hero', () => {
      spyOn(heroService, 'computeMaxLevel').and.returnValue(-1);
      spyOn(heroService, 'blabla').and.callThrough();

      const heroes: any = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });

    it('should not be able to play when no hero', () => {
      spyOn(heroService, 'computeMaxLevel').and.returnValue('');
      spyOn(heroService, 'blabla').and.returnValue('t3');

      const heroes: any = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });
  });
});
