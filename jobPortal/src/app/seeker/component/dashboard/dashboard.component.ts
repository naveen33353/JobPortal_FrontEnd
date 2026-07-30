import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { ApplicationService } from 'src/app/service/application/application.service';

import { SeekerService } from 'src/app/service/seeker/seeker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

// firstName! : string;


  

  constructor(private seekerService : SeekerService, private applicationService : ApplicationService,
               private router : Router){}

  id : number = Number(localStorage.getItem("id"));


 


 

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

logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
    alert("Continue to Logout?");
  }

=======
logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
    alert("Continue to Logout?");
  }

>>>>>>> bf920fac1b3138a978a873b7eb25c89f1ff77998

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


<<<<<<< HEAD


=======
>>>>>>> bf920fac1b3138a978a873b7eb25c89f1ff77998
}
