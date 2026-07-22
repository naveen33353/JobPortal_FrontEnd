import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent {
  constructor(private route : Router){}

  signUp(){
  this.route.navigate(['/register']);
}

login(){
  this.route.navigate(['/login']);
}
}
