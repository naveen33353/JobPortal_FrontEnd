import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './component/landing/landing.component';
import { AllJobsComponent } from '../jobs/component/all-jobs/all-jobs.component';

@NgModule({
  declarations: [
    LandingComponent,
    
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }