import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { PermissionService } from '../services/permission.service';

@Injectable()
export class FeatureGuard  {

  constructor(
    protected router: Router,
    protected permissionService: PermissionService) {
  }
  ngOnInit() {


  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> {

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!!userInfo && this.permissionService.checkPermission(userInfo, route.data.feature, route.data.permission,state.url)) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
