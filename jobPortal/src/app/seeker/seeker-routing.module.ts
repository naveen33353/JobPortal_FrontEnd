import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../seeker/component/dashboard/dashboard.component';
import { AllCompaniesComponent } from '../company/component/all-companies/all-companies.component';
import { AllJobsComponent } from '../jobs/component/all-jobs/all-jobs.component';

const routes: Routes = [
  {
    path : 'jobseeker-dashboard',
    component : DashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeekerRoutingModule { }
