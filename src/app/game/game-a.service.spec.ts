import { GameAService } from './game-a.service';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

describe('game-a.service', () => {
  let gameAService: GameAService;

  beforeEach(() => {
    const heroService = new HeroService();
    gameAService = new GameAService(heroService);
  });

  describe('play()', () => {
    it('should be able to play', () => {
      const firstHero: Hero = {
        level: 44,
        fly: false,
        swim: false
      };
      const heroes = [firstHero];
      expect(gameAService.play(heroes)).toEqual(true);
    });

    it('should not be able to play when no hero', () => {
      const heroes = [];
      expect(gameAService.play(heroes)).toEqual(false);
    });
  });
});
