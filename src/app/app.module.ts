import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
// app
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'job', loadChildren: 'app/job/job.module#JobModule' },
  { path: 'music', loadChildren: 'app/music/music.module#MusicModule' },
  { path: 'game', loadChildren: 'app/game/game.module#GameModule' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export interface AppState {
  context: string;
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
