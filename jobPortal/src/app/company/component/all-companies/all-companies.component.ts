import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/landing/models/company';
import { Job } from 'src/app/landing/models/job';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobService } from 'src/app/service/job/job.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent {

    constructor(private router:Router , private jobService:JobService ,private compService:CompanyService){}
  

  signup(){
    this.router.navigate(['/register'])
  }

  login(){
    this.router.navigate(['/login']);
  }
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
