import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { ApplicationService } from 'src/app/service/application/application.service';
import { AuthService } from 'src/app/service/auth.service';
import { JobService } from 'src/app/service/job/job.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';
import { SeekerService } from 'src/app/service/seeker/seeker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

// firstName! : string;

<<<<<<< HEAD
  constructor(private seekerService:SeekerService , private router:Router){}

  id: number = Number(localStorage.getItem("id"));
=======
  constructor(private seekerService : SeekerService, private applicationService : ApplicationService){}

  id : number = Number(localStorage.getItem("id"));
>>>>>>> 8c74e6d (28-07-26 morning)

 

  seeker!:jobSeeker;
 
 getSeekerById(id: number) {
  this.seekerService.getSeekerById(id).subscribe({
    next: (res) => {
      console.log("Response:", res);
      this.seeker = res;
      console.log("Name:", this.seeker.firstName);
    },
    error: (err) => console.log(err)
  });
}

<<<<<<< HEAD
logout() {
  localStorage.clear();
  this.router.navigate(['/']);
}
=======
applicationsById :  any[] =[];
 totalApplications = 0;


getApplicationsByJobseekerId(id : number){
  this.applicationService.getApplicationByjobSeekerId(id).subscribe({
    next : (result) =>{
      console.log(result);
      this.applicationsById=result ;
      this.totalApplications  = this.applicationsById.length;
      console.log(this.totalApplications);
    },
     error: (err) => {
      console.log(err);
    }
  });
}

 ngOnInit(){
    this.getSeekerById(this.id);
    this.getApplicationsByJobseekerId(this.id);
    console.log(this.totalApplications);
  }
>>>>>>> 8c74e6d (28-07-26 morning)
}
