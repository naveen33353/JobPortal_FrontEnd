import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Company } from '../../Models/Company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
constructor(private route : Router , private service : AuthService , private fb : FormBuilder){}

companyReg = this.fb.group({
    companyName :['',Validators.required],
    email :['',Validators.required],
    password :['',Validators.required],
    website :['',Validators.required],
    location :['',Validators.required],
    description :['',Validators.required]
})

register() {
  this.service.signUpCompany(this.companyReg.value as Company).subscribe({
    next: (res) => {
      console.log("SUCCESS", res);
    },
    error: (err) => {
      console.log("ERROR", err);
      console.log("Status:", err.status);
      console.log("Body:", err.error);
    }
  });
}

submit(){
  console.log(this.companyReg.value)
  this.register();
   this.companyReg.reset();
   if(this.companyReg.valid){
    alert("Company Created !\n Welcome to Hirehub.")
    this.route.navigate(['/auth/login']);
   }
   else{
    alert(`Something Went Wrong.\n Please try again`);
   }
}

}
