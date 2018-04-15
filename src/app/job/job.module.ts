import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Action, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
// app
import { JobComponent } from './job.component';

const routes: Routes = [
    {
      path: '',
      component: JobComponent
    }
  ];

export function jobReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('async_job', jobReducer)
    ],
  providers: []
})
export class JobModule { }
