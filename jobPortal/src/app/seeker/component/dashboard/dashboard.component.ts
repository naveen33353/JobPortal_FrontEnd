import { Component, OnInit } from '@angular/core';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { ApplicationService } from 'src/app/service/application/application.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private jobseekerService: JobseekerService,
    private applicationService: ApplicationService
  ) {}

  id: number = Number(localStorage.getItem('id'));

  seeker!: jobSeeker;
  applicationsById: any[] = [];
  totalApplications = 0;

  ngOnInit(): void {
    this.getSeekerById(this.id);
    this.getApplicationsByJobseekerId(this.id);
  }

  getSeekerById(id: number): void {
    this.jobseekerService.getJobSeekerById(id).subscribe({
      next: (res) => this.seeker = res,
      error: (err) => console.log(err)
    });
  }

  getApplicationsByJobseekerId(id: number): void {
    this.applicationService.getApplicationByjobSeekerId(id).subscribe({
      next: (result) => {
        this.applicationsById = result;
        this.totalApplications = this.applicationsById.length;
      },
      error: (err) => console.log(err)
    });
  }
}
