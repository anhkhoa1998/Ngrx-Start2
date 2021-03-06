import { companyActions } from '../actions/index';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Company, SaveCompanyModel } from '@app/company/models';
import { createReducer, on } from '@ngrx/store';
import { defaultPageInfo, defaultPagination, PageInfo } from '@app/shared';
import { HttpError } from '@app/core/http-error.model';

export interface CompanyState extends EntityState<Company> {
  pageInfo: PageInfo;
  pending: boolean;
  error: HttpError;
  selectedCompany: Company;
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

export const initialState: CompanyState = adapter.getInitialState({
  pageInfo: defaultPageInfo,
  pending: false,
  error: null,
  selectedCompany: null,
});

const reducer = createReducer(
  initialState,

  on(companyActions.getCompany, (state => ({ ...state, pending: true }))),
  on(companyActions.getCompanySuccess, (state, { company }) => ({ ...state, pending: false, error: null, selectedCompany: company })),
  on(companyActions.getCompanyFailed, (state, { error }) => ({ ...state, pending: false, error })),

  on(companyActions.getCompanies, (state => ({ ...state, pending: true }))),
  on(companyActions.getCompaniesSuccess, (state, { companies, pagination }) => {
    return adapter.setAll(companies, {
      ...state,
      pending: false,
      error: null,
      pageInfo: {
        ...state.pageInfo,
        ...pagination,
      },
    });
  }),
  on(companyActions.getCompaniesFailed, (state, { error }) => ({ ...state, pending: false, error })),
  on(companyActions.createCompany, (state => ({ ...state, pending: true }))),
  on(companyActions.createCompanySuccess, (state => ({ ...state, pending: false, error: null }))),
  on(companyActions.createCompanyFailed, ((state, { error }) => ({ ...state, pending: false, error }))),

  on(companyActions.deleteCompany, (state => ({ ...state, pending: true }))),
  on(companyActions.deleteCompanySuccess, (state, {companyId}) => {
    return adapter.removeOne(companyId, {...state, error: null, pending: false});
  }),
  on(companyActions.deleteCompanyFail, ((state, { error }) => ({ ...state, pending: false, error }))),

  on(companyActions.changePageNumber, ((state, { pageNumber }) => ({
    ...state,
    pageInfo: {
      ...state.pageInfo,
      pageNumber
    }
  }))),
);

export function companyReducer(state, action) {
  return reducer(state, action);
}
