import { Injectable } from '@angular/core';
import { companyActions } from '@app/company/actions/index';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '@app/company/services';
import { catchError, exhaustMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCompanyPageInfo } from '@app/company/Selectors/company.selector';
import { CompanyState } from '@app/company/reducer/company.reducer';
import { ResponseGetCompanies } from '@app/company/models';


@Injectable()
export class CompanyEffects {
  constructor(private actions$: Actions,
              private store$: Store<CompanyState>,
              private companyService: CompanyService) {
  }

  getCompanies$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.getCompanies),
    withLatestFrom(this.store$.pipe(select(selectCompanyPageInfo))),
    switchMap(([action, pageInfo]) => this.companyService.getCompanies(pageInfo)
      .pipe(
        map( (res: ResponseGetCompanies) => companyActions.getCompaniesSuccess({companies: res.companies , pagination: res.pagination})),
        catchError(e => of(companyActions.getCompaniesFailed()))
      ))
  ));

  createCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.createCompany),
    mergeMap((action) => this.companyService.createCompany(action.company)
      .pipe(
        map((res: any) => companyActions.createCompanySuccessfully(),
          catchError(() => EMPTY))
      )
    )
  ));

  changPageNumber$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.changePageNumber),
    switchMap((action) => of(companyActions.getCompanies())),
    catchError(() => of(companyActions.getCompaniesFailed())
  )));
}

