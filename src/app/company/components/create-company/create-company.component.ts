import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyService } from '../../services';
import { SaveCompanyModel } from '../../models';
import { Store } from '@ngrx/store';
import { CompanyState } from '@app/company/reducer/company.reducer';
import { companyActions } from '@app/company/actions';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: [ './create-company.component.scss' ]
})
export class CreateCompanyComponent implements OnInit {

  company: SaveCompanyModel = new SaveCompanyModel();

  constructor(private store: Store<CompanyState>, private router: Router) {
  }

  ngOnInit(): void {

  }

  createCompany(company) {
    this.store.dispatch(companyActions.createCompany({company}));
    this.router.navigate(['/companies']);
  }
}
