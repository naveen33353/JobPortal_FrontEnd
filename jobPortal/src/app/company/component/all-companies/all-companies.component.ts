import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/landing/models/company';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-all-companies',
  templateUrl: './all-companies.component.html',
  styleUrls: ['./all-companies.component.css']
})
export class AllCompaniesComponent implements OnInit {

  companies: Company[] = [];

  constructor(private compService: CompanyService) {}

  ngOnInit(): void {
    this.getAllCompanies();
  }

  getAllCompanies(): void {
    this.compService.getAllCompanies().subscribe(res => this.companies = res);
  }
}
