import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Application } from 'src/app/auth/Models/Application';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { Job } from 'src/app/landing/models/job';

import { ApplicationService } from 'src/app/service/application/application.service';
import { JobService } from 'src/app/service/job/job.service';
import { SeekerService } from 'src/app/service/seeker/seeker.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(
    private seekerService: SeekerService,
    private applicationService: ApplicationService,
    private router: Router,
    private jobService: JobService
  ) {}


  id: number = Number(localStorage.getItem("id"));


  seeker!: jobSeeker;


  applicationsById: Application[] = [];
  totalApplications: number = 0;


  applicationsByPending: Application[] = [];
  totalPendingApplications: number = 0;


  applicationsByApproved: Application[] = [];
  totalapprovedApplications: number = 0;


  savedJobs: Job[] = [];
  totalSavedJobs: number = 0;


  // Recommended jobs
  jobSeekerSkills: string[] = [];
  recommendedJobs: Job[] = [];



  ngOnInit(): void {

    this.getSeekerById(this.id);

    this.getApplicationsByJobseekerId(this.id);

    this.getApplicationByStatus();

    this.getApplicationsByApproved();

    this.getAllSavedJobs(this.id);

  }



  getSeekerById(id: number) {

    this.seekerService.getSeekerById(id).subscribe({
      next: (res: jobSeeker) => {
        console.log("Seeker:", res);
        this.seeker = res;
        this.jobSeekerSkills = this.seeker.skills;
        console.log("Skills:", this.jobSeekerSkills);
        this.getRecommendedJobs();
      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  getRecommendedJobs() {
    this.recommendedJobs = [];
    for (const skill of this.jobSeekerSkills) {
      this.jobService.getRecommendedJobs(skill).subscribe({
        next: (result: Job[]) => {
          console.log("Jobs for skill:", skill, result);
          this.recommendedJobs.push(...result);
          this.recommendedJobs =
            this.recommendedJobs.filter(
              (job, index, self) =>
                index === self.findIndex(
                  j => j.jobId === job.jobId
                )
            );
        },
        error: (err) => {

          console.log(err);

        }

      });


    }


  }





  getApplicationsByJobseekerId(id: number) {


    this.applicationService.getApplicationByjobSeekerId(id)
      .subscribe({

        next: (result: Application[]) => {

          this.applicationsById = result;

          this.totalApplications =
            this.applicationsById.length;

        },


        error: (err) => {

          console.log(err);

        }

      });

  }

  getApplicationByStatus() {
    this.applicationService
      .getApplicationByStatus("PENDING")
      .subscribe({

        next: (result: Application[]) => {

          this.applicationsByPending = result;

          this.totalPendingApplications =
            result.length;

        },
        error: (err) => {

          console.log(err);

        }

      });


  }





  getApplicationsByApproved() {
    this.applicationService
      .getApplicatioByApproved()
      .subscribe({

        next: (result: Application[]) => {
          this.applicationsByApproved = result;
          this.totalapprovedApplications =
            result.length;
        },
        error: (err) => {

          console.log(err);

        }

      });


  }





  getAllSavedJobs(id: number) {
    this.jobService.getSavedJobs(id)
      .subscribe({
        next: (result: Job[]) => {
          this.savedJobs = result;
          this.totalSavedJobs =
            this.savedJobs.length;
        },


        error: (err) => {

          console.log(err);

        }

      });


  }





  logout() {

    localStorage.clear();

    this.router.navigate(['/']);

  }


}