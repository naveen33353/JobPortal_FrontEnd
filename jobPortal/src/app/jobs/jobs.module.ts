import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';

import { ViewJobComponent } from './component/view-job/view-job.component';
import { AllJobsComponent } from './component/all-jobs/all-jobs.component';
import { SharedModule } from '../shared/shared.module';
import { LandingModule } from "src/app/landing/landing.module";


@NgModule({
  declarations: [
    AllJobsComponent,
    ViewJobComponent
  ],

  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    LandingModule
]
})
export class JobsModule {

}