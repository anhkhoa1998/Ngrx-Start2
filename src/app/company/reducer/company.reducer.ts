import { companyActions } from '../actions/index';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Company, SaveCompanyModel } from '@app/company/models';
import { createReducer, on } from '@ngrx/store';
import { defaultPageInfo, defaultPagination, PageInfo } from '@app/shared';

export interface CompanyState extends EntityState<Company> {
  pageInfo: PageInfo;
  getSuccess: boolean;
  createSuccess: boolean;
  company: SaveCompanyModel;
}

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>();

export const initialState: CompanyState = adapter.getInitialState({
  pageInfo: defaultPageInfo,
  getSuccess: false,
  createSuccess: false,
  company: null,
});

const reducer = createReducer(
  initialState,
  on(companyActions.getCompaniesSuccess, (state, { companies, pagination }) => {
    return adapter.setAll(companies, {
      ...state,
      getSuccess: true,
      pageInfo: {
        ...state.pageInfo,
        ...pagination,
      },
    });
  }),
  on(companyActions.getCompaniesFailed, (state => ({ ...state, getSuccess: false }))),
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
