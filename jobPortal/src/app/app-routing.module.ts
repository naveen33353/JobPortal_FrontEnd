import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './landing/component/landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {
    path :'',
    component : LandingComponent
  },
  {
    path :'auth',
    loadChildren : () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
   {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'seeker',
    loadChildren: () =>
      import('./seeker/seeker.module').then(m => m.SeekerModule)
  },
  {
    path: 'job',
    loadChildren: () =>
      import('./jobs/jobs.module').then(m => m.JobsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
