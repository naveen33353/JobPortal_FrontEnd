import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeekerRoutingModule } from './seeker-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    SeekerRoutingModule,
    SharedModule
  ]
})
export class SeekerModule { }
