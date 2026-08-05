import { Component, OnInit } from '@angular/core';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  jobSeeker!: jobSeeker;

  constructor(private jobSeekerService: JobseekerService) {}

  ngOnInit(): void {
    this.getJobSeekerById();
  }

  getJobSeekerById(): void {
    const id = Number(localStorage.getItem('id'));
    this.jobSeekerService.getJobSeekerById(id).subscribe({
      next: (result) => { this.jobSeeker = result; },
      error: (err) => { console.log(err); }
    });
  }
}
