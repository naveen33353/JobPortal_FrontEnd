import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/auth/Models/Application';
import { ApplicationDetails } from 'src/app/auth/Models/ApplicationDetails';
import { Company } from 'src/app/landing/models/company';
import { Job } from 'src/app/landing/models/job';
import { ApplicationService } from 'src/app/service/application/application.service';
import { CompanyService } from 'src/app/service/company/company.service';
import { SeekerService } from 'src/app/service/seeker/seeker.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent {

        
          isLoggedIn = false;
          initials = '';
          profileRoute = '/';
        
          companyId!: number;
        
          company!: Company;
          jobs: Job[] = [];
          applications: Application[] = [];
          pendingApplications: Application[] = [];
          approvedAppplications: Application[] = [];
          applicant !: Application[];
          app !:ApplicationDetails;
        
          constructor(
            private compService: CompanyService,
            private appService: ApplicationService,
            private router: Router,
            private route: ActivatedRoute,
            private jobSeekerService: SeekerService
          ) {}
        
          ngOnInit(): void {
        
          const routeId = this.route.snapshot.paramMap.get('id');
        
          if (routeId) {
            // Public company profile
            this.companyId = Number(routeId);
          } else {
            // Logged-in company profile
            this.companyId = Number(localStorage.getItem('id'));
          }
        
          this.isLoggedIn = !!localStorage.getItem('token');
        
          if (this.isLoggedIn) {
        
            const role = localStorage.getItem('role');
            const loginId = Number(localStorage.getItem('id'));
        
            if (role === 'COMPANY') {
        
              this.profileRoute = '/company-dashboard';
        
              this.compService.getCompanyById(loginId).subscribe({
                next: (company: any) => {
                  if (company?.companyName) {
                    this.initials = company.companyName
                      .split(' ')
                      .map((x: string) => x.charAt(0))
                      .join('')
                      .substring(0, 2)
                      .toUpperCase();
                  }
                }
              });
        
            } else {
        
              this.profileRoute = '/jobseeker-dashboard';
        
              this.jobSeekerService.getSeekerById(loginId).subscribe({
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
                }
              });
            }
          }
        
          this.getCompanyById();
          this.getJobsByCompany();
          this.getApplicantByJob();
          this.getApplicantById();
        }
          getCompanyById() {
            this.compService.getCompanyById(this.companyId).subscribe(
              res => this.company = res
            );
          }
        
          getJobsByCompany() {
            this.compService.getJobsByCompany(this.companyId).subscribe(
              res => this.jobs = res
            );
          }
        
          getApplicantsByCompany() {
            this.appService.getApplicantsByCompany(this.companyId).subscribe(
              res => this.applications = res
            );
          }
        
          getPendingApplications() {
            this.appService.getPendindApplicants(this.companyId).subscribe(
              res => this.pendingApplications = res
            );
          }
        
          getHiredApplicants() {
            this.appService.getHiredApplicants(this.companyId).subscribe(
              res => this.approvedAppplications = res
            );
          }

          getApplicantByJob(){
            this.appService.getApplicationByJob(Number(this.route.snapshot.paramMap.get('jobId'))).subscribe(
              res =>
                this.applicant = res
            )
          }

          getApplicantById(){
            this.appService.getApplicationById(Number(this.route.snapshot.paramMap.get('appId'))).subscribe(
              res =>
                this.app = res
            )
          }
        
          logout(): void {
            localStorage.clear();
            this.router.navigate(['/']);
            alert('Continue to Logout?');
          }
        
      
      
    
    
  
  

}
