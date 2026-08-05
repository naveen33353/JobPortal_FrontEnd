import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/landing/models/job';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  job!: Job;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJobById(jobId).subscribe({
      next: (result) => { this.job = result; },
      error: (err) => { console.log(err); }
    });
  }

  submitApplication(): void {
    this.router.navigateByUrl('/application/jobseeker-applications');
  }
}
