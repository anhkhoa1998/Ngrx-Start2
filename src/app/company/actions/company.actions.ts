import { createAction, props } from '@ngrx/store';

import { Company, SaveCompanyModel, PatchUpdateCompanyModel } from '../models/company.model';
import { PageInfo, Pagination } from '@app/shared';
import { HttpError } from '@app/core/http-error.model';

export const changePageNumber = createAction(
  '[Company] Change page number',
  props<{ pageNumber: number }>()
);

export const getCompanies = createAction(
  '[Company] Get Companies'
);
export const getCompaniesFailed = createAction(
  '[Company] Get Companies Failed',
  props<{ error: HttpError }>()
);
export const getCompaniesSuccess = createAction(
  '[Company] Get Companies Successfully',
  props<{ companies: Company[], pagination: Pagination }>()
);
export const createCompany = createAction(
  '[Company] Create Company',
  props<{ company: SaveCompanyModel }>()
);

export const createCompanyFailed = createAction(
  '[Company] Create Company Failed',
  props<{ error: HttpError}>()
);
export const createCompanySuccess = createAction(
  '[Company] Create Company Successfully'
);

export const updateCompany = createAction(
  '[Company] Update Company',
  props<{ companyId: number, company: SaveCompanyModel }>()
);
export const updateCompanySuccess = createAction(
  '[Company] Update Company Successfully'
);
export const updateCompanyFail = createAction(
  '[Company] Update Company Failed',
  props<{ error: HttpError}>()
);

export const deleteCompany = createAction(
  '[Company] Delete Company',
  props<{ companyId: number }>()
);
export const deleteCompanySuccess = createAction(
  '[Company] Delete Company Successfully'
);
export const deleteCompanyFail = createAction(
  '[Company] Delete Company Failed',
  props<{ error: HttpError}>()
);

export const patchCompany = createAction(
  '[Company] Patch update Company',
  props<{ companyId: number, patch: PatchUpdateCompanyModel }>()
);

export const companyKey = 'company';
