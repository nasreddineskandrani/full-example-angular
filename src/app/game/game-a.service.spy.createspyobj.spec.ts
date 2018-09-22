import { TestBed } from '@angular/core/testing';

import { GameAService } from './game-a.service';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';
import { Type } from '@angular/core';

// https://itnext.io/better-typescript-support-for-jasmine-20dc7454ba94
export function spyOnClass<T>(spiedClass: Type<T>) {
  const prototype = spiedClass.prototype;

  const methods = Object.getOwnPropertyNames(prototype)
    // Object.getOwnPropertyDescriptor is required to filter functions
    .map(name => [name, Object.getOwnPropertyDescriptor(prototype, name)])
    .filter(([name, descriptor]) => {
      // select only functions
      return (descriptor as PropertyDescriptor).value instanceof Function;
    })
    .map(([name]) => name);
  // return spy object
  return jasmine.createSpyObj('spy', [...methods]);
}

describe('game-a.service.spy', () => {
  let gameAService: GameAService;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameAService,
        {
          provide: HeroService,
          useValue: spyOnClass(HeroService)
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
      heroServiceSpy.blabla.and.returnValue('t1');

      const heroes = [firstHero];
      expect(gameAService.play(heroes)).toEqual(true);
    });

    it('should not be able to play when no hero', () => {
      heroServiceSpy.computeMaxLevel.and.returnValue(-1);
      heroServiceSpy.blabla.and.callThrough(); // call the replaced spied one not the original

      const heroes: any = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });

    it('should not be able to play when no hero', () => {
      heroServiceSpy.computeMaxLevel.and.returnValue('');
      heroServiceSpy.blabla.and.returnValue('t3');

      const heroes: any = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });
  });
});
