import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AllCompaniesComponent } from './component/all-companies/all-companies.component';
import { CompanyProfileComponent } from './component/company-profile/company-profile.component';
import { PostJobComponent } from './component/post-job/post-job.component';
import { ManageJobComponent } from './component/manage-job/manage-job.component';
import { ApplicantsComponent } from './component/applicants/applicants.component';

const routes: Routes = [
  {path:'company-dashboard',component:DashboardComponent},
  {path:'all-companies',component:AllCompaniesComponent},
  {path:'profile-company',component:CompanyProfileComponent},
  {path:'company-post-job',component:PostJobComponent},
  {path:'company-manage-jobs',component:ManageJobComponent},
  {path:'company-applicants',component:ApplicantsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
