;
import { NotFoundComponent } from './component/not-found/not-found.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundRoutingModule } from './notfound-routing.module';
import   { RouterLink } from '@angular/router'; 


@NgModule({
  declarations: [
   NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotfoundRoutingModule,
    RouterLink
  ]
})
export class NotfoundModule { }
