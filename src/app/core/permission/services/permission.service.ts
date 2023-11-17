import { Injectable } from '@angular/core';

import { Features } from '../models/features.enum';
import { Permission } from '../models/permissions.enum';
import { FeaturePermission } from '../models/feature-permission.model';

@Injectable({
  providedIn: 'root'
})



export class PermissionService {

  checkPermission(user, feature: Features, permission: Permission,url = null): boolean {

    let allowedUrls = JSON.parse(localStorage.getItem('navItems'));
    if(allowedUrls){
      const new_url = url.split('?');
      const featurePermission = allowedUrls.find(f => f.url === new_url[0]);
      if (!!featurePermission) {
        return true;
      }
    }
    return false;
  }
  checkPermissionForDirective(user, permission: any,url = null): boolean {
    const featurePermission = user.userPermissions.find(f => f.permissionCode === permission);
    if (!!featurePermission) {
      return true;
    }
    return false;
  }
}
