import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './modules/auth/guards/auth.guard';
import { DefaultLayoutComponent } from './core/default-layout/default-layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    // canActivate: [authGuard],
    data: {
      title: 'Home'
    },
    children: [
      { path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./modules/common/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'simple-table',
        loadChildren: () =>
          import('./modules/common/tables/simple-table/simple-table.module').then((m) => m.DataTableModule)
      },
      { path: 'gallery', loadChildren: () => import('./modules/common/gallery/gallery.module').then(m => m.GalleryModule) },
      { path: 'kanban-board', loadChildren: () => import('./modules/common/kanban-board/kanban-board.module').then(m => m.KanbanBoardModule) },
      { path: 'modals-alerts', loadChildren: () => import('./modules/common/ui-elements/modals-alerts/modals-alerts.module').then(m => m.ModalsAlertsModule) },
      { path: 'navs-tabs', loadChildren: () => import('./modules/common/ui-elements/navs-tabs/navs-tabs.module').then(m => m.NavsTabsModule) },
      { path: 'general-form-elements', loadChildren: () => import('./modules/forms/general-form-elements/general-form-elements.module').then(m => m.GeneralFormElementsModule) },
      { path: 'advance-form-elements', loadChildren: () => import('./modules/forms/advance-form-elements/advance-form-elements.module').then(m => m.AdvanceFormElementsModule) },
      { path: 'validation', loadChildren: () => import('./modules/forms/validation/validation.module').then(m => m.ValidationModule) },
      { path: 'inbox', loadChildren: () => import('./modules/common/mailbox/inbox/inbox.module').then(m => m.InboxModule) },
      { path: 'compose', loadChildren: () => import('./modules/common/mailbox/compose/compose.module').then(m => m.ComposeModule) },
      { path: 'read', loadChildren: () => import('./modules/common/mailbox/read/read.module').then(m => m.ReadModule) },
      { path: 'invoice', loadChildren: () => import('./modules/common/pages/invoice/invoice.module').then(m => m.InvoiceModule) },
      { path: 'profile', loadChildren: () => import('./modules/common/pages/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'ecommerce', loadChildren: () => import('./modules/common/pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
      { path: 'projects', loadChildren: () => import('./modules/common/pages/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'projects-add', loadChildren: () => import('./modules/common/pages/projects-add/projects-add.module').then(m => m.ProjectsAddModule) },
      { path: 'project-edit', loadChildren: () => import('./modules/common/pages/project-edit/project-edit.module').then(m => m.ProjectEditModule) },
      { path: 'project-detail', loadChildren: () => import('./modules/common/pages/project-detail/project-detail.module').then(m => m.ProjectDetailModule) },
      { path: 'contacts', loadChildren: () => import('./modules/common/pages/contacts/contacts.module').then(m => m.ContactsModule) },
      { path: 'faq', loadChildren: () => import('./modules/common/pages/faq/faq.module').then(m => m.FaqModule) },
      { path: 'contact-us', loadChildren: () => import('./modules/common/pages/contact-us/contact-us.module').then(m => m.ContactUsModule) },
      { path: 'login-v1', loadChildren: () => import('./modules/common/extras/login-v1/login-v1.module').then(m => m.LoginV1Module) },
      { path: 'register-v1', loadChildren: () => import('./modules/common/extras/register-v1/register-v1.module').then(m => m.RegisterV1Module) },
      { path: 'forgot-password', loadChildren: () => import('./modules/common/extras/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
      { path: 'recover-password', loadChildren: () => import('./modules/common/extras/recover-password/recover-password.module').then(m => m.RecoverPasswordModule) },
      { path: 'login-v2', loadChildren: () => import('./modules/common/extras/login-v2/login-v2.module').then(m => m.LoginV2Module) },
      { path: 'register-v2', loadChildren: () => import('./modules/common/extras/register-v2/register-v2.module').then(m => m.RegisterV2Module) },
      { path: 'forgot-password-v2', loadChildren: () => import('./modules/common/extras/forgot-password-v2/forgot-password-v2.module').then(m => m.ForgotPasswordV2Module) },
      { path: 'recover-password-v2', loadChildren: () => import('./modules/common/extras/recover-password-v2/recover-password-v2.module').then(m => m.RecoverPasswordV2Module) },
      { path: 'lock-screen', loadChildren: () => import('./modules/common/extras/lock-screen/lock-screen.module').then(m => m.LockScreenModule) },
      { path: 'legacy-user-menu', loadChildren: () => import('./modules/common/extras/legacy-user-menu/legacy-user-menu.module').then(m => m.LegacyUserMenuModule) },
      { path: 'language-menu', loadChildren: () => import('./modules/common/extras/language-menu/language-menu.module').then(m => m.LanguageMenuModule) },
      { path: 'error-page-v1', loadChildren: () => import('./modules/common/extras/error-page-v1/error-page-v1.module').then(m => m.ErrorPageV1Module) },
      { path: 'error-page-v2', loadChildren: () => import('./modules/common/extras/error-page-v2/error-page-v2.module').then(m => m.ErrorPageV2Module) },
      { path: 'pace', loadChildren: () => import('./modules/common/extras/pace/pace.module').then(m => m.PaceModule) },
      { path: 'blank-page', loadChildren: () => import('./modules/common/extras/blank-page/blank-page.module').then(m => m.BlankPageModule) },
      { path: 'starter-page', loadChildren: () => import('./modules/common/extras/starter-page/starter-page.module').then(m => m.StarterPageModule) },
      { path: 'simple-search', loadChildren: () => import('./modules/common/search/simple-search/simple-search.module').then(m => m.SimpleSearchModule) },
      { path: 'enhanced-search', loadChildren: () => import('./modules/common/search/enhanced-search/enhanced-search.module').then(m => m.EnhancedSearchModule) },

    ]
  },
  {
    path: 'login',
    // canActivate: [authGuard],
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'dashboard',
    // canActivate: [authGuard],
    component: DashboardComponent,
    data: {
      title: 'Login Page'
    }
   },

  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    data: {
      title: 'Reset Password Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
