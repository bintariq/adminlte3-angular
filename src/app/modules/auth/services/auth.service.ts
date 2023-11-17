import { Injectable } from '@angular/core';
import { ApiHandlerService } from '../../../core/shared/utils/api-handler.service';
import { API_ENDPOINTS, ApiMethod } from '../../../core/shared/utils/const';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: ApiHandlerService) { }

  signIn(data:any) {
    return this.http.requestCall(API_ENDPOINTS.logIn,ApiMethod.POST,'',data)
  }

  resetPassword(data:any,token) {
    return this.http.requestCall(API_ENDPOINTS.resetPassword,ApiMethod.POST,token,data)
  }
  forgetPassword(data:any) {
    return this.http.requestCall(API_ENDPOINTS.forgetPassword,ApiMethod.POST,'',data)
  }

  signUp(data:any) {
    return this.http.requestCall(API_ENDPOINTS.signUp,ApiMethod.POST,'',data)
  }

  logout(){
    localStorage.clear();
  }

}
