import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Job } from 'src/app/landing/models/job';
import { JobService } from 'src/app/service/job/job.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css'],
})
export class AllJobsComponent implements OnInit {

  allJobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe(res => {
      this.allJobs = res;
    });
  }
}
