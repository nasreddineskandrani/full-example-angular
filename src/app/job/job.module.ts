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

@NgModule({
  declarations: [
    JobComponent
  ],
  imports: [RouterModule.forChild(routes)],
  providers: []
})
export class JobModule { }
