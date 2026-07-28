import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { Job } from 'src/app/landing/models/job';
import { JobService } from 'src/app/service/job/job.service';
import { CompanyService } from 'src/app/service/company/company.service';
import { JobseekerService } from 'src/app/service/jobseeker/jobseeker.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AllJobsComponent {

  allJobs: Job[] = [];

  isLoggedIn = false;
  initials = '';
  profileRoute = '/';

  constructor(
    private jobService: JobService,
    private companyService: CompanyService,
    private jobSeekerService: JobseekerService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.isLoggedIn = !!localStorage.getItem('token');

    if (this.isLoggedIn) {

      const role = localStorage.getItem('role');
      const id = Number(localStorage.getItem('id'));

      if (role === 'COMPANY') {

        this.profileRoute = '/company-dashboard';

        this.companyService.getCompanyById(id).subscribe({
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
          error: (err) => console.error(err)
        });

      } else {

        this.profileRoute = '/jobseeker-dashboard';

        this.jobSeekerService.getJobSeekerById(id).subscribe({
          next: (user: any) => {

            // userName ഇല്ലെങ്കിൽ firstName + lastName ഉപയോഗിക്കും
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
          error: (err) => console.error(err)
        });
      }
    }

    this.getAllJobs();
  }

  getAllJobs(): void {
    this.jobService.getAllJobs().subscribe(res => {
      this.allJobs = res;
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
    alert("Continue to Logout?");
  }
  goToProfile(): void {
    this.router.navigate([this.profileRoute]);
  }

}