import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app
import { GameComponent } from './game.component';
import { HeroService } from './hero.service';
import { GameAService } from './game-a.service';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
  }
];

@NgModule({
  declarations: [GameComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [GameAService, HeroService]
})
export class GameModule {}
