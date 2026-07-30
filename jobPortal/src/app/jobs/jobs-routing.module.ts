import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from '../company/component/all-companies/all-companies.component';
import { ViewJobComponent } from './component/view-job/view-job.component';
import { AllJobsComponent } from './component/all-jobs/all-jobs.component';

const routes: Routes = [
    {
      path:'all-jobs',
      component:AllJobsComponent
    },
    {
    path: 'view-job/:id',
    component: ViewJobComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule  { }
