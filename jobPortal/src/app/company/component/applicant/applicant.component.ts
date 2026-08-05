import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationDetails } from 'src/app/auth/Models/ApplicationDetails';
import { ApplicationService } from 'src/app/service/application/application.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  app!: ApplicationDetails;

  constructor(
    private appService: ApplicationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getApplicantById();
  }

  getApplicantById() {
    this.appService.getApplicationById(Number(this.route.snapshot.paramMap.get('appId')))
      .subscribe(res => this.app = res);
  }
}
