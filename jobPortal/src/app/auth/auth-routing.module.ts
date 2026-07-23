import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CompanyComponent } from './signup/company/company.component';
import { SeekerComponent } from './signup/seeker/seeker.component';

const routes: Routes = [

  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : SignupComponent
  },

  {
    path:"register/seeker",
    component:SeekerComponent
  },
  {
    path:"register/company",
    component:CompanyComponent
  },
  {
    path:'',
    loadChildren:()=>import('../company/company.module').then(m => m.CompanyModule)
  },
  {
    path : '',
    loadChildren : () => import('../seeker/seeker.module').then(m => m.SeekerModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
