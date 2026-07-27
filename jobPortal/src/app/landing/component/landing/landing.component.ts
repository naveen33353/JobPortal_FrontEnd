import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job/job.service';
import { Job } from '../../models/job';
import { Company } from 'src/app/landing/models/company';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private jobService:JobService ,private compService:CompanyService){}

  ngOnInit(){
    this.getAllJobs();
    this.getAllCompanies();
  }

jobs:Job[] = [];
companies:Company[] = [];

  getAllJobs() {
  this.jobService.getAllJobs().subscribe((res) => {
    this.jobs = res
  });
}

  getAllCompanies(){
    this.compService.getAllCompanies().subscribe(
      (res)=>
        this.companies = res
    )
  }

}
