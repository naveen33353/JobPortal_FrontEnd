import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeekerRoutingModule } from './seeker-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SharedModule } from "src/app/shared/shared.module";



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SeekerRoutingModule,
    SharedModule
]
})
export class SeekerModule { }
