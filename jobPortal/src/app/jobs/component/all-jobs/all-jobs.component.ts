import { Component } from '@angular/core';
import { Job } from 'src/app/landing/models/job';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent {

  ngOnInit(){
    this.getAllJobs();
  }

  constructor(private jobService: JobService){}

  allJobs : Job[] = [];

  getAllJobs(){
    this.jobService.getAllJobs().subscribe(
      (res)=>
          this.allJobs = res
    )
  }

}
