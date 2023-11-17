import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Permission } from '../models/permissions.enum';
import { Features } from '../models/features.enum';
import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[appCheckPermissions]',
})
export class CheckPermissionsDirective implements OnInit, OnDestroy {

  @Input() appCheckPermissions: Permission;
  @Input() appCheckPermissionsFeature: Features;

  private onDestroy$ = new Subject<boolean>();

  constructor(
    private permissionService: PermissionService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  ngOnInit() {

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    // Fetch All user Permissions and verify user have access or not
    if (!!userInfo && this.permissionService.checkPermissionForDirective(userInfo, this.appCheckPermissions)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
}
