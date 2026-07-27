import { Component } from '@angular/core';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
<<<<<<< HEAD
import { AuthService } from 'src/app/service/auth.service';
import { JobService } from 'src/app/service/job/job.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';
=======
import { SeekerService } from 'src/app/service/seeker/seeker.service';
>>>>>>> a49905d857a6c2aeb02ed8ee2f7ad42c176610c4

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private service : JobseekerService){}

<<<<<<< HEAD
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
=======
  constructor(private seekerService:SeekerService){}

  id: number = Number(localStorage.getItem("Id"));

  ngOnInit(){
    this.getSeekerById(this.id);
  }

  seeker!:jobSeeker;
  seekerName!:string;

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
>>>>>>> a49905d857a6c2aeb02ed8ee2f7ad42c176610c4
}

ngOnInit(){
  this.getjobSeekerById();
}



}