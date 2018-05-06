import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
// app
import { JobComponent } from './job.component';
import { jobReducer } from './+state/job.reducer';

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
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature('asyncJob', jobReducer)
    ],
  providers: []
})
export class JobModule { }
