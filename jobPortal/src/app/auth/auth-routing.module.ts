import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CompanyComponent } from './signup/company/company.component';
import { SeekerComponent } from './signup/seeker/seeker.component';
import { guestGuard } from '../core/guard/guest.guard';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'register',
    component: SignupComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'register/seeker',
    component: SeekerComponent,
    canActivate: [guestGuard]
  },
  {
    path: 'register/company',
    component: CompanyComponent,
    canActivate: [guestGuard]
  },
 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }