import { adapter, companyReducer, CompanyState } from '../reducer/company.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { companyKey } from '@app/company/actions/company.actions';

export const selectCompanyState = createFeatureSelector<CompanyState>(companyKey);

export const {
  selectIds: selectCompanyIds,
  selectEntities: selectCompanyEntities,
  selectAll: selectAllCompanies,
  selectTotal: selectTotalCompany,
} = adapter.getSelectors(selectCompanyState);

export const selectCompanyPageInfo = createSelector(
  selectCompanyState,
  (state) => {
    return state && state.pageInfo;
  }
);




