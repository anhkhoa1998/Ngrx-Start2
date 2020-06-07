import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyService } from '../../services';
import { SaveCompanyModel } from '../../models';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: [ './create-company.component.scss' ]
})
export class CreateCompanyComponent implements OnInit {

  company: SaveCompanyModel = new SaveCompanyModel();

  butonOperation = 'Create';

  constructor(private companyService: CompanyService, private router: Router) {
  }

  ngOnInit(): void {

  }

  createCompany(company) {
    this.company = company;
    this.companyService.createCompany(this.company).subscribe((res: any) => {
      this.router.navigate([ '/companies' ]);
    });
  }


}
