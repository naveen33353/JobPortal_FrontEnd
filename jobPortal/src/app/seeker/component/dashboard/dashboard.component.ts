import { Component } from '@angular/core';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { AuthService } from 'src/app/service/auth.service';
import { JobService } from 'src/app/service/job/job.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private service : JobseekerService){}

firstName! : string;

getjobSeekerById(){
  const id = Number(localStorage.getItem("id"));

  this.service.getJobSeekerById(id).subscribe(
    (res) => {
      console.log(res);
      
      this.firstName = res.firstName;

      if(this.firstName == ""){
         console.log('Firstname is empty');
      }

      console.log("First Name:", this.firstName);
    },
    (error) => {
      console.log(error);
    }
  );
}

ngOnInit(){
  this.getjobSeekerById();
}



}