import { Component, OnInit } from '@angular/core';

import { defaultPagination, PageInfo, Pagination } from '@app/shared';

import Swal from 'sweetalert2';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Company } from '../../models';
import { CompanyService } from '../../services';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CompanyState } from '@app/company/reducer/company.reducer';
import { companyActions } from '@app/company/actions';
import { selectAllCompanies, selectCompanyPageInfo, selectPending } from '@app/company/Selectors/company.selector';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies$: Observable<Array<Company>>;
  pageInfo$: Observable<PageInfo>;
  pending$: Observable<boolean>;
  faAngleDown = faAngleDown;

  constructor(private companyService: CompanyService, private store: Store<CompanyState>) {
  }
  ngOnInit(): void {
    this.companies$ = this.store.pipe(select(selectAllCompanies));
    this.pageInfo$ = this.store.pipe(select(selectCompanyPageInfo));
    this.pending$ = this.store.pipe(select(selectPending));
    this.getCompanies();
  }
  deleteCompany(companyId: number) {
    Swal.fire({
      text: 'Do you want to delete it?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.store.dispatch(companyActions.deleteCompany({companyId}));
      }
    });
  }

  getCompanies() {
    this.store.dispatch(companyActions.getCompanies());
  }

  onPageChange(page: number) {
    this.store.dispatch(companyActions.changePageNumber({ pageNumber: page }));
  }

  showMore(isShow: boolean) {
    return isShow = !isShow;
  }
}
