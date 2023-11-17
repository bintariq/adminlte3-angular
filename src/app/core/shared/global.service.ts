import { API_ENDPOINTS, ApiMethod } from './utils/const';
import { ApiHandlerService } from './utils/api-handler.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: ApiHandlerService) { }

  getBrowserDetail(fingerprint) {
    return this.http.requestCall(API_ENDPOINTS.getBrowserDetail,ApiMethod.GET,fingerprint)
  }
  setBrowserDetail(fingerprint,token) {
    let params = "?browserId="+fingerprint+'&browserToken='+token;
    return this.http.requestCall(API_ENDPOINTS.setBrowserDetail,ApiMethod.GET,params)
  }
}
