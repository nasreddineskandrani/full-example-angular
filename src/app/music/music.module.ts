import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
// app
import { MusicComponent } from './music.component';
import { musicReducer } from './+state/music.reducer';

const routes: Routes = [
    {
      path: '',
      component: MusicComponent
    }
  ];

@NgModule({
  declarations: [MusicComponent],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('asyncMusic', musicReducer)
    ],
  providers: []
})
export class MusicModule { }
