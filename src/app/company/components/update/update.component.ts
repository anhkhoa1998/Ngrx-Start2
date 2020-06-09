import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Company } from '../../models';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {selectCompanyUpdating } from '@app/company/Selectors/company.selector';
import { CompanyState } from '@app/company/reducer/company.reducer';
import { companyActions } from '@app/company/actions';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  companyId: number;
  infoCompany: Company;
  company$: Observable<Company>;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<CompanyState>,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.company$ = this.store.pipe(select(selectCompanyUpdating));
    this.store.dispatch(companyActions.getCompany());
  }

  updateCompany(company: Company) {
    /*this.companyService.saveCompany(company, company.id).subscribe((res: any) => {
      this.router.navigate(['/companies']);
    });*/
  }
}
