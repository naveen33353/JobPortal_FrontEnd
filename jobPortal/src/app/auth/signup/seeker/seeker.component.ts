import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { min } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { jobSeeker } from '../../Models/jobSeeker';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent {

  constructor(private route : Router,private service  : AuthService, private fb : FormBuilder){}

  signUp(){
  this.route.navigate(['/register']);
}

login(){
  this.route.navigate(['/login']);
}

regSeeker = this.fb.group({
  firstName : ['', Validators.required],
  lastName : ['',Validators.required],
  email : ['',Validators.required,Validators.email],
  password : ['',Validators.required, Validators.minLength(6)],
   skills: this.fb.array([
        this.fb.control('')
      ]),
  location : ['',Validators.required]
});


  register(){
    this.service.signUp(this.regSeeker.value as jobSeeker).subscribe(
      (result) => {
        console.log(result)
      }
    );
  }
  

  onSubmit() {
    this.register();
console.log(this.regSeeker.value);
this.regSeeker.reset();

}
}
