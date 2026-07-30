import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from 'src/app/auth/Models/Application';
import { JobPostDTO } from 'src/app/auth/Models/JobPost';
import { Company } from 'src/app/landing/models/company';
import { Job } from 'src/app/landing/models/job';
import { ApplicationService } from 'src/app/service/application/application.service';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {

  company!: Company;
  jobs: Job[] = [];
  applications: Application[] = [];
  pendingApplications: Application[] = [];
  approvedApplications: Application[] = [];

  constructor(
    private compService: CompanyService,
    private appService: ApplicationService,
    private jobService: JobService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  postForm = this.fb.group({
    jobTitle: ['', Validators.required],
    description: ['', Validators.required],
    experience: ['', Validators.required],
    salary: ['', Validators.required],
    endDate: ['', Validators.required],
    skills: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getCompanyById();
    this.getJobsByCompany();
    this.getApplicantsByCompany();
    this.getPendingApplications();
    this.getHiredApplicants();
  }

  getCompanyById() {
    this.compService.getCompanyById(Number(localStorage.getItem('id')))
      .subscribe(res => this.company = res);
  }

  getJobsByCompany() {
    this.compService.getJobsByCompany(Number(localStorage.getItem('id')))
      .subscribe(res => this.jobs = res);
  }

  getApplicantsByCompany() {
    this.appService.getApplicantsByCompany(Number(localStorage.getItem('id')))
      .subscribe(res => this.applications = res);
  }

  getPendingApplications() {
    this.appService.getPendindApplicants(Number(localStorage.getItem('id')))
      .subscribe(res => this.pendingApplications = res);
  }

  getHiredApplicants() {
    this.appService.getHiredApplicants(Number(localStorage.getItem('id')))
      .subscribe(res => this.approvedApplications = res);
  }

 submit(): void {

  if (this.postForm.invalid) {
    this.postForm.markAllAsTouched();
    return;
  }

  const job: JobPostDTO = {
    companyId: Number(localStorage.getItem("id")),
    jobTitle: this.postForm.value.jobTitle!,
    description: this.postForm.value.description!,
    experience: this.postForm.value.experience!,
    salary: this.postForm.value.salary!,
    endDate: this.postForm.value.endDate!,
    skills: this.postForm.value.skills!
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0)
  };

  console.log(job);

  this.jobService.postJob(job).subscribe({
    next: (res) => {
      console.log(res);
      alert("Job posted successfully");
      this.postForm.reset();
    },
    error: (err) => {
      console.log(err);
      console.log(err.error);
      alert(err.error.message);
    }
  });

}
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}