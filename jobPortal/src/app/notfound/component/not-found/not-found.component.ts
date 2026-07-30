import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/landing/models/company';
import { Job } from 'src/app/landing/models/job';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobService } from 'src/app/service/job/job.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  
    constructor(
      private jobService: JobService,
      private compService: CompanyService,
      private jobSeekerService: JobseekerService,
      private router: Router
    ) {}
  
    jobs: Job[] = [];
    companies: Company[] = [];
  
    isLoggedIn = false;
    initials = '';
    profileRoute = '/';
  
    ngOnInit() {
  
      this.isLoggedIn = !!localStorage.getItem('token');
  
      if (this.isLoggedIn) {
  
        const role = localStorage.getItem('role');
        const id = Number(localStorage.getItem('id'));
  
        if (role === 'COMPANY') {
  
          this.profileRoute = '/company-dashboard';
  
          this.compService.getCompanyById(id).subscribe((company) => {
            this.initials = company.companyName
              .split(' ')
              .map(x => x[0])
              .join('')
              .substring(0, 2)
              .toUpperCase();
          });
  
        } else {
  
          this.profileRoute = '/jobseeker-dashboard';
  
          this.jobSeekerService.getJobSeekerById(id).subscribe((seeker) => {
            this.initials = (seeker.firstName.charAt(0) + seeker.lastName.charAt(0)).toUpperCase();
          });
  
        }
      }
  
      this.getAllJobs();
      this.getAllCompanies();
    }
  
    getAllJobs() {
      this.jobService.getAllJobs().subscribe((res) => {
        this.jobs = res;
      });
    }
  
    getAllCompanies() {
      this.compService.getAllCompanies().subscribe((res) => {
        this.companies = res;
      });
    }
  
    logout(){
      localStorage.clear();
      this.router.navigate(['/']);
    }
  
  

}
