import { Component } from '@angular/core';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { SeekerService } from 'src/app/service/seeker/seeker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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
}
