import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  gg(position: any) {
    console.log('HeroService', position);
  }
}
