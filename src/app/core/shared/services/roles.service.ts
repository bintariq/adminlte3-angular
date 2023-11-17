import { Injectable } from '@angular/core';
import { ApiHandlerService } from 'src/app/core/shared/utils/api-handler.service';
import { API_ENDPOINTS, ApiMethod } from 'src/app/core/shared/utils/const';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  userInfo: any = {};
  constructor(private http: ApiHandlerService) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  }

  getUserRoles() {
    let params = '?countryId=' + this.userInfo.countryId + '&companyId=' + this.userInfo.companyId + '&roleId=' + this.userInfo.roleId;
    return this.http.requestCall(API_ENDPOINTS.getRoles, ApiMethod.GET, params);
  }

  getPermissions() {
    let params = '?countryId=' + this.userInfo.countryId + '&companyId=' + this.userInfo.companyId + '&roleId=' + this.userInfo.roleId;
    return this.http.requestCall(API_ENDPOINTS.getPermissions, ApiMethod.GET, params);
  }

  createUserRoles(data: any) {
    return this.http.requestCall(API_ENDPOINTS.createRoles, ApiMethod.POST, '', data);
  }

  updateUserRoles(data: any) {
    return this.http.requestCall(API_ENDPOINTS.updateRoles, ApiMethod.POST, '', data);
  }

  deleteUserRoles(id: any) {
    return this.http.requestCall(API_ENDPOINTS.deleteRoles, ApiMethod.GET, id);
  }

  getUserRolesByID(id: any) {
    return this.http.requestCall(API_ENDPOINTS.getRoleByID, ApiMethod.GET, id);
  }

  getAllCoutriesList() {
    return this.http.requestCall(API_ENDPOINTS.getAllCountriesList,ApiMethod.GET,'');
  }

  getAllCompanyList() {
    return this.http.requestCall(API_ENDPOINTS.getAllCompaniesList,ApiMethod.GET,'');
  }

  getAllCompanyListByCountry(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getAllCompaniesListByCountry,ApiMethod.GET,id);
  }

  getAllBranchesListByCompany(id:any) {
    return this.http.requestCall(API_ENDPOINTS.getAllBranchesListByCompany,ApiMethod.GET,id);
  }


  getAllPermissions(){
    return this.http.requestCall(API_ENDPOINTS.getPermissions,ApiMethod.GET,'');
  }

  getCompanyPermissionsList(id:any){
    return this.http.requestCall(API_ENDPOINTS.getAllPermissionsByCompany,ApiMethod.GET,id);
  }





  updatePermission(data){
    return this.http.requestCall(API_ENDPOINTS.updatePermissions,ApiMethod.POST,'', data);
  }

  deletePermission(id){
    return this.http.requestCall(API_ENDPOINTS.deletePermissions,ApiMethod.GET,id);
  }

  assignPermissions(data){
    return this.http.requestCall(API_ENDPOINTS.assignPermissions,ApiMethod.POST,'', data);
  }

  unAssignPermission(permissionId) {
    return this.http.requestCall(API_ENDPOINTS.unAssignPermission, ApiMethod.GET, permissionId);
  }
}
