import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AllCompaniesComponent } from './component/all-companies/all-companies.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { PostJobComponent } from './component/post-job/post-job.component';
import { ManageJobComponent } from './component/manage-job/manage-job.component';
import { ApplicantsComponent } from './component/applicants/applicants.component';
import { CompanyComponent } from './component/company/company.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { ApplicantComponent } from './component/applicant/applicant.component';
import { ApplicantsListComponent } from './component/applicants-list/applicants-list.component';
import { ReviewComponent } from './component/review/review.component';

const routes: Routes = [
  {path:'company-dashboard',component:DashboardComponent},
  {path:'all-companies',component:AllCompaniesComponent},
  {path:'profile-company',component:CompanyProfileComponent},
  {path:'company-post-job',component:PostJobComponent},
  {path:'company-manage-jobs',component:ManageJobComponent},
  {path:'company-applicants',component:ApplicantsComponent},
  {path:'company',component:CompanyComponent},
  {path:'company/:id' , component:CompanyComponent},
  {path:'company/edit/:id',component:EditProfileComponent},
  {path:'company/applicants/:jobId',component:ApplicantsListComponent},
  {path:'company/applicant/:appId', component:ApplicantComponent},
  {path:'company/review/:appId',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
