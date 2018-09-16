import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// app
import { GameComponent } from './game.component';
import { HeroService } from './hero.service';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
  }
];

@NgModule({
  declarations: [GameComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [HeroService]
})
export class GameModule {}
