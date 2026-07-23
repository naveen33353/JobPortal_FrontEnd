import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeekerRoutingModule } from './seeker-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SeekerRoutingModule
  ]
})
export class SeekerModule { }
