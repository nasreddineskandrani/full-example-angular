import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// app
import { GameComponent } from './game.component';
import { HeroService } from './hero.service';
import { GameAService } from './game-a.service';
import { GameBService } from './game-b.service';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
  }
];

@NgModule({
  declarations: [GameComponent],
  imports: [RouterModule.forChild(routes), HttpClientModule],
  providers: [GameAService, GameBService, HeroService]
})
export class GameModule {}
