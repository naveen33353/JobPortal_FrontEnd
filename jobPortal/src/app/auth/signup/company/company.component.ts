import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
constructor(private route : Router){}

login(){
  this.route.navigate(['/login']);
}
 signUp(){
  this.route.navigate(['/register']);
}

}
