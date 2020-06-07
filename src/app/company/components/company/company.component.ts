import { Component, OnInit } from '@angular/core';

import { defaultPagination, PageInfo, Pagination } from '@app/shared';

import Swal from 'sweetalert2';

import { Company } from '../../models';
import { CompanyService } from '../../services';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CompanyState } from '@app/company/reducer/company.reducer';
import { companyActions } from '@app/company/actions';
import { selectAllCompanies, selectCompanyPageInfo } from '@app/company/Selectors/company.selector';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies$: Observable<Array<Company>>;
  pageInfo$: Observable<PageInfo>;
  constructor(private companyService: CompanyService, private store: Store<CompanyState>) {
  }
  ngOnInit(): void {
    this.companies$ = this.store.pipe(select(selectAllCompanies));
    this.pageInfo$ = this.store.pipe(select(selectCompanyPageInfo));
    this.getCompanies();
  }
  deleteCompany(companyId: number) {
    Swal.fire({
      text: 'Do you want to delete it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'

    }).then((result) => {
      if (result.value) {
        this.companyService.deleteCompany(companyId).subscribe((res: any) => {
          this.getCompanies();
        });
        Swal.fire({
          text: 'Delete success',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        });
      } else {
        return;
      }
    });
  }

  getCompanies() {
    this.store.dispatch(companyActions.getCompanies());
  }

  onPageChange(page: number) {
    this.store.dispatch(companyActions.changePageNumber({ pageNumber: page }));
  }
}
