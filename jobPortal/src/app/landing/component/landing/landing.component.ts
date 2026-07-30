import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job/job.service';
import { Job } from '../../models/job';
import { Company } from 'src/app/landing/models/company';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

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

        this.profileRoute = 'company/company-dashboard';

        this.compService.getCompanyById(id).subscribe((company) => {
          this.initials = company.companyName
            .split(' ')
            .map(x => x[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
        });

      } else {

        this.profileRoute = 'seeker/jobseeker-dashboard';

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