import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from '../jobs/component/all-jobs/all-jobs.component';

const routes: Routes = [
  {path:'alljobs' , component:AllJobsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
