
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authGuard  {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    debugger
    let token = localStorage.getItem('token');
    if (token && state.url != '/login') {
      return true;
    }
    else if (token && state.url == '/login') {
      this.router.navigate(['dashboard']);
      return false;
    }
    else if (!token && state.url != '/login') {
      this.router.navigate(['login']);
      return true;
    }
    return true;
  }
}
