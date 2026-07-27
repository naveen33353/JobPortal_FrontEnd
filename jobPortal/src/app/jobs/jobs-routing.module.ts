import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from '../company/component/all-companies/all-companies.component';

const routes: Routes = [
    {path:'all-companies',component:AllCompaniesComponent},
    {}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
