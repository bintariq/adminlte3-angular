import { API_ENDPOINTS, ApiMethod } from './utils/const';
import { ApiHandlerService } from './utils/api-handler.service';
import { Injectable } from '@angular/core';
import { Component, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private spinnerr$ = new BehaviorSubject<any>({});

  constructor(private http: ApiHandlerService) { }


  getSpinnerObservable(): Observable<string> {
    return this.spinnerr$.asObservable();
  }
  requestedStarted(heading,message,type) {
    this.spinnerr$.next({status:'start',heading:heading,message:message,type:type});
  }
  requestedEnded() {
    this.spinnerr$.next({status:'stop'});
  }

}
