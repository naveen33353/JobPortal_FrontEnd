import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
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

firstName! : string;

  constructor(private seekerService:SeekerService , private router:Router){}

  id: number = Number(localStorage.getItem("id"));

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

logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
    alert("Continue to Logout?");
  }
}
