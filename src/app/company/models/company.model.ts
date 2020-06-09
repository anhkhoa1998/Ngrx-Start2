import { PageInfo, Pagination } from '@app/shared';

export interface Company {
  id: number;
  no: string;
  name: string;
  established: Date;
  companyPhoneNumbers: CompanyPhoneNumbers[];
  email: string;
  address: string;
  website: string;
}

export class SaveCompanyModel {
  no: string;
  name: string;
  established: Date;
  companyPhoneNumbers: CompanyPhoneNumbers[];
  email: string;
  address: string;
  website: string;
}

export class PatchUpdateCompanyModel {
  path: string;
  value: string;
  op: string;
}

export class ResponseGetCompanies {
  companies: Company[];
  pagination: Pagination;
}

export class CompanyPhoneNumbers {
  phoneNumber: string;
}
