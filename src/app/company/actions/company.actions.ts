import { createAction, props } from '@ngrx/store';

import { Company, SaveCompanyModel, PatchUpdateCompanyModel } from '../models/company.model';
import { PageInfo, Pagination } from '@app/shared';

export const getCompanies = createAction(
  '[Company] Get Companies'
);

export const changePageNumber = createAction(
  '[Company] Change page number',
  props<{ pageNumber: number }>()
);

export const getCompaniesFailed = createAction(
  '[Company] Get Companies Failed',
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
  '[Company] Create Company Failed'
);

export const createCompanySuccessfully = createAction(
  '[Company] Create Company Successfully'
);

export const updateCompany = createAction(
  '[Company] Update Company',
  props<{ companyId: number, company: SaveCompanyModel }>()
);

export const deleteCompany = createAction(
  '[Company] Delete Company',
  props<{ companyId: number }>()
);

export const patchCompany = createAction(
  '[Company] Patch update Company',
  props<{ companyId: number, patch: PatchUpdateCompanyModel }>()
);

export const companyKey = 'company';
