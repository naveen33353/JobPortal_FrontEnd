import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AllCompaniesComponent } from './component/all-companies/all-companies.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { PostJobComponent } from './component/post-job/post-job.component';
import { ManageJobComponent } from './component/manage-job/manage-job.component';
import { ApplicantsComponent } from './component/applicants/applicants.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AllCompaniesComponent,
    CompanyProfileComponent,
    PostJobComponent,
    ManageJobComponent,
    ApplicantsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
