import { Injectable } from '@angular/core';
import getBrowserFingerprint from 'get-browser-fingerprint';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError, from, lastValueFrom } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private globalService: GlobalService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const fingerprint =  getBrowserFingerprint();

    let accessToken = ''
    if (localStorage.getItem('token')) {
      accessToken = localStorage.getItem('token') || ''
    }
    if (accessToken) {
      req = this.AddBrowserIdAndToken(req, fingerprint, accessToken);
      req.headers.append('Content-Type', 'application/json');
    } else {
      req = this.AddBrowserId(req, fingerprint);
      req.headers.append('Content-Type', 'application/json');
    }
    return next.handle(req).pipe(catchError(error => {
      if(error.status == 401 && error.statusText == 'Unauthorized'){
        localStorage.clear()
        window.location.reload();
      }else{
        return throwError(() => error);
      }

    }))
  }
  AddBrowserIdAndToken(request: HttpRequest<any>, fingerprint: string, token: string) {
    debugger
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(!userInfo){userInfo = {user_id:null}}
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'fingerprint': String(fingerprint),
        'userId':String(userInfo.user_id)
      }
    });
  }
  AddBrowserId(request: HttpRequest<any>, fingerprint: string) {
    return request.clone({
      setHeaders: {
        'fingerprint': String(fingerprint)
      }
    });
  }


}
