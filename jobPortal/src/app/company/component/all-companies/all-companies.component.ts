import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from 'src/app/landing/models/company';
import { Job } from 'src/app/landing/models/job';

import { CompanyService } from 'src/app/service/company/company.service';
import { JobService } from 'src/app/service/job/job.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent {

  constructor(
    private router: Router,
    private jobService: JobService,
    private compService: CompanyService,
    private jobSeekerService: JobseekerService
  ) {}

  jobs: Job[] = [];
  companies: Company[] = [];

  isLoggedIn = false;
  initials = '';
  profileRoute = '/';

  ngOnInit(): void {

    this.isLoggedIn = !!localStorage.getItem('token');

    if (this.isLoggedIn) {

      const role = localStorage.getItem('role');
      const id = Number(localStorage.getItem('id'));

      if (role === 'COMPANY') {

        this.profileRoute = '/company-dashboard';

        this.compService.getCompanyById(id).subscribe({
          next: (company: any) => {
            if (company?.companyName) {
              this.initials = company.companyName
                .split(' ')
                .map((x: string) => x.charAt(0))
                .join('')
                .substring(0, 2)
                .toUpperCase();
            }
          },
          error: err => console.error(err)
        });

      } else {

        this.profileRoute = '/jobseeker-dashboard';

        this.jobSeekerService.getJobSeekerById(id).subscribe({
          next: (user: any) => {

            const name =
              user.userName ??
              `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim();

            if (name) {
              this.initials = name
                .split(' ')
                .map((x: string) => x.charAt(0))
                .join('')
                .substring(0, 2)
                .toUpperCase();
            }
          },
          error: err => console.error(err)
        });

      }
    }

    this.getAllJobs();
    this.getAllCompanies();
  }

  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe(res => {
      this.jobs = res;
    });
  }

  getAllCompanies(): void {
    this.compService.getAllCompanies().subscribe(res => {
      this.companies = res;
    });
  }

  signup(): void {
    this.router.navigate(['/register']);
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  goToProfile(): void {
    this.router.navigate([this.profileRoute]);
  }

}