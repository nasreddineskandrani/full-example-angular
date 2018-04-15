import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
// app
import { MusicComponent } from './music.component';

const routes: Routes = [
    {
      path: '',
      component: MusicComponent
    }
  ];

export function musicReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

@NgModule({
  declarations: [MusicComponent],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('async_music', musicReducer)
    ],
  providers: []
})
export class MusicModule { }
