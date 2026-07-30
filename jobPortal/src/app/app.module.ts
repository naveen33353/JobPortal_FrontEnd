import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JobSeekerHomeComponent } from './job-seeker-home/job-seeker-home.component';


@NgModule({
  declarations: [
    AppComponent,
    JobSeekerHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
   HttpClientModule
    
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
