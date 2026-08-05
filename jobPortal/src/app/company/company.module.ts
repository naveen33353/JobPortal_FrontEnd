import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AllCompaniesComponent } from './component/all-companies/all-companies.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { PostJobComponent } from './component/post-job/post-job.component';
import { ManageJobComponent } from './component/manage-job/manage-job.component';
import { ApplicantsComponent } from './component/applicants/applicants.component';
import { CompanyComponent } from './component/company/company.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { RouterModule } from '@angular/router';
import { ApplicantComponent } from './component/applicant/applicant.component';
import { ApplicantsListComponent } from './component/applicants-list/applicants-list.component';
import { ReviewComponent } from './component/review/review.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AllCompaniesComponent,
    CompanyProfileComponent,
    PostJobComponent,
    ManageJobComponent,
    ApplicantsComponent,
    CompanyComponent,
    EditProfileComponent,
    ApplicantComponent,
    ApplicantsListComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CompanyModule { }
