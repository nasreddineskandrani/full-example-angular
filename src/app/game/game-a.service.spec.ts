import { GameAService } from './game-a.service';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

describe('game-a.service', () => {
  let gameAService: GameAService;
  let heroService: HeroService;
  let spy: jest.SpyInstance;

  const heroService2 = new HeroService();
  const spy2 = jest.spyOn(heroService2, 'computeMaxLevel');

  beforeEach(() => {
    heroService = new HeroService();
    spy = jest.spyOn(heroService, 'computeMaxLevel');
    gameAService = new GameAService(heroService);
  });

  it('test for PR infer type jest', () => {
    spy.mockReturnValue('2');
    spy.mockReturnValue(2);

    expect(1).toBe(1);
  });

  it('test for PR infer type jest', () => {
    jest.spyOn(heroService, 'computeMaxLevel').mockReturnValue('2');
    jest.spyOn(heroService, 'computeMaxLevel').mockReturnValue(2);

    expect(1).toBe(1);
  });

  it('test for PR infer type jest', () => {
    spy2.mockReturnValue('2');
    spy2.mockReturnValue(2);

    expect(1).toBe(1);
  });
});
