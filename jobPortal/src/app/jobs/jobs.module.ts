import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllJobsComponent } from './component/all-jobs/all-jobs.component';
import { AppRoutingModule } from "src/app/app-routing.module";



@NgModule({
  declarations: [
    AllJobsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
]
})
export class JobsModule { }
