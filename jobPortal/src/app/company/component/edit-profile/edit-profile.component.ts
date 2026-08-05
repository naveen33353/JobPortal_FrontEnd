import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/landing/models/company';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  company!: Company;

  constructor(private compService: CompanyService) {}

  ngOnInit(): void {
    this.getCompanyById();
  }

  getCompanyById() {
    this.compService.getCompanyById(Number(localStorage.getItem('id')))
      .subscribe(res => this.company = res);
  }
}
