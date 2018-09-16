import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  gg(position) {
    console.log('HeroService', position);
  }
}
