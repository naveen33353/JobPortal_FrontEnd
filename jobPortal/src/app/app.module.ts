import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
   HttpClientModule
    
  ],
<<<<<<< HEAD
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
=======
  providers: [ {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
>>>>>>> a49905d857a6c2aeb02ed8ee2f7ad42c176610c4
  bootstrap: [AppComponent]
})
export class AppModule { }
