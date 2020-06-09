import { Injectable } from '@angular/core';
import { companyActions } from '@app/company/actions/index';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CompanyService } from '@app/company/services';
import { catchError, exhaustMap, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectCompanyPageInfo } from '@app/company/Selectors/company.selector';
import { CompanyState } from '@app/company/reducer/company.reducer';
import { Company, ResponseGetCompanies } from '@app/company/models';
import { AppState, selectRouterParams } from '@app/core/store';
import { RouterStateModel } from '@app/core/store/reducers/router.model';


@Injectable()
export class CompanyEffects {
  constructor(private actions$: Actions,
              private store$: Store<CompanyState>,
              private appStore$: Store<AppState>,
              private companyService: CompanyService) {
  }

  getCompanies$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.getCompanies),
    withLatestFrom(this.store$.pipe(select(selectCompanyPageInfo))),
    switchMap(([action, pageInfo]) => this.companyService.getCompanies(pageInfo)
      .pipe(
        map((res: ResponseGetCompanies) => companyActions.getCompaniesSuccess({ companies: res.companies, pagination: res.pagination })),
        catchError(error => of(companyActions.getCompaniesFailed({ error }))
        ))
    )
  ));

  getCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.getCompany),
    withLatestFrom(this.appStore$.pipe(select(selectRouterParams))),
    switchMap(([action, routerParams]) => {
        console.log(routerParams);
        return this.companyService.getCompanyById(routerParams.id).pipe(
          map((res: Company) => companyActions.getCompanySuccess({ company: res })),
          catchError(error => of(companyActions.getCompanyFailed({ error })))
        );
      }
    )
  ));

  deleteCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.deleteCompany),
    exhaustMap(action =>
      this.companyService.deleteCompany(action.companyId).pipe(
        map(res => companyActions.deleteCompanySuccess(),
          catchError(error => of(companyActions.deleteCompanyFail({ error })))
        )
      )
    )
  ));

  createCompany$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.createCompany),
    exhaustMap(action =>
      this.companyService.createCompany(action.company).pipe(
        map(res => companyActions.createCompanySuccess(),
          catchError(error => of(companyActions.createCompanyFailed({ error })))
        )
      )
    )
  ));

  changPageNumber$ = createEffect(() => this.actions$.pipe(
    ofType(companyActions.changePageNumber),
    map((action) => companyActions.getCompanies()),
  ));
}

