import { TestBed } from '@angular/core/testing';

import { GameAService } from './game-a.service';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

describe('game-a.service.testbed', () => {
  let gameAService: GameAService;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameAService,
        {
          provide: HeroService,
          useValue: jasmine.createSpyObj('HeroService', ['computeMaxLevel'])
        }
      ]
    });

    gameAService = TestBed.get(GameAService);
    heroServiceSpy = TestBed.get(HeroService);
  });

  describe('play()', () => {
    it('should be able to play', () => {
      const firstHero: Hero = {
        level: 44,
        fly: false,
        swim: false
      };

      heroServiceSpy.computeMaxLevel.and.returnValue(44);

      const heroes = [firstHero];
      expect(gameAService.play(heroes)).toEqual(true);
    });

    it('should not be able to play when no hero', () => {
      heroServiceSpy.computeMaxLevel.and.returnValue(null);

      const heroes = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });

    it('should not be able to play when no hero', () => {
      heroServiceSpy.computeMaxLevel.and.returnValue('');

      const heroes = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });
  });
});
