import { Injectable } from '@angular/core';
import { ApiHandlerService } from 'src/app/core/shared/utils/api-handler.service';
import { API_ENDPOINTS, ApiMethod } from 'src/app/core/shared/utils/const';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
userInfo:any;
  constructor(private http: ApiHandlerService) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
  }

  getAllCoutriesList() {
    return this.http.requestCall(API_ENDPOINTS.getAllCountriesList,ApiMethod.GET,'');
  }

  getCountryById(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getCountryById,ApiMethod.GET,id);
  }

  createCountry(data:any) {
    return this.http.requestCall(API_ENDPOINTS.createCountry,ApiMethod.POST,'', data);
  }

  updateCountry(data:any) {
    return this.http.requestCall(API_ENDPOINTS.updateCountry,ApiMethod.POST,'', data);
  }

  deleteCountry(id:any) {
    return this.http.requestCall(API_ENDPOINTS.deleteCountry,ApiMethod.GET,id);
  }

  getAllCompaniesList() {
    return this.http.requestCall(API_ENDPOINTS.getAllCompaniesList,ApiMethod.GET,'');
  }

  getCompanyById(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getCompanyById,ApiMethod.GET,id);
  }

  getAllCompaniesListByCountry(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getAllCompaniesListByCountry,ApiMethod.GET,id);
  }

  createCompany(data:any) {
    return this.http.requestCall(API_ENDPOINTS.createCompany,ApiMethod.POST,'', data);
  }

  updateCompany(data:any) {
    return this.http.requestCall(API_ENDPOINTS.updateCompany,ApiMethod.POST,'', data);
  }

  deleteCompany(id:any) {
    return this.http.requestCall(API_ENDPOINTS.deleteCompany,ApiMethod.GET,id);
  }


  getAllBranchesList() {
    let params = '?countryId=' + this.userInfo.countryId + '&companyId=' + this.userInfo.companyId + '&roleId=' + this.userInfo.roleId;
    return this.http.requestCall(API_ENDPOINTS.getAllBranchesList,ApiMethod.GET,params);
  }

  getBranchById(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getBranchById,ApiMethod.GET,id);
  }

  getAllBranchesListByCompany(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getAllBranchesListByCompany,ApiMethod.GET,id);
  }

  createBranch(data:any) {
    return this.http.requestCall(API_ENDPOINTS.createBranch,ApiMethod.POST,'', data);
  }

  updateBranch(data:any) {
    return this.http.requestCall(API_ENDPOINTS.updateBranch,ApiMethod.POST,'', data);
  }

  deleteBranch(id:any) {
    return this.http.requestCall(API_ENDPOINTS.deleteBranch,ApiMethod.GET,id);
  }
}
