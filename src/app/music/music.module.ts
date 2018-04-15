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

@NgModule({
  declarations: [MusicComponent],
  imports: [RouterModule.forChild(routes)],
  providers: []
})
export class MusicModule { }
