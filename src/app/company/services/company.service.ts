import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Company, ResponseGetCompanies, SaveCompanyModel } from '../models';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PageInfo } from '@app/shared';

@Injectable()
export class CompanyService {

  constructor(private httpClient: HttpClient) {
  }

  getCompanies(pageInfo: PageInfo): Observable<ResponseGetCompanies> {
    let params = new HttpParams()
      .set('pageNumber', pageInfo.pageNumber.toString())
      .set('pageSize', pageInfo.pageSize.toString());
    if (pageInfo.sortBy){
      params = params.append('sortBy', pageInfo.sortBy);
    }
    if (pageInfo.searchBy && pageInfo.keyWord){
      params = params.append('searchBy', pageInfo.searchBy).append('keyword', pageInfo.keyWord);
    }
    return this.httpClient.get<ResponseGetCompanies>(`${ environment.apiUrl }/companies`, {
      params,
    });
  }

  createCompany(company: SaveCompanyModel) {
    return this.httpClient.post(`${ environment.apiUrl }/companies`, company);
  }

  saveCompany(company: Company, id: number) {
    return this.httpClient.put(`${ environment.apiUrl }/companies/${ id }`, company);
  }


  deleteCompany(companyId: number) {
    return this.httpClient.delete(`${ environment.apiUrl }/companies/${ companyId }`);
  }

  getCompanyById(companyId: number) {
    return this.httpClient.get(`${ environment.apiUrl }/companies/${ companyId }`);
  }

}
