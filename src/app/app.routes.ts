import { Routes } from '@angular/router'
import { LandingLayoutComponent } from './layouts/landing-layout.component'
import { ErrorV1Component } from '@views/pages/speciality/error-v1/error-v1.component'
import { ErrorV2Component } from '@views/pages/speciality/error-v2/error-v2.component'
import { AccountLayoutComponent } from '@layouts/account/account-layout.component'
import { PricingComponent } from '@views/pages/pricing/pricing.component'
import { SigninComponent } from '@views/auth/signin/signin.component'
import { SignupComponent } from '@views/auth/signup/signup.component'
import { AuthGuard } from '@core/guards'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@views/apcs/home/apcs.home.component').then((mod) => mod.APCSHomeComponent),
    data: { title: 'Multipurpose Business / Technology Template' },
  },
  {
    path: 'about',
    component: LandingLayoutComponent,
    loadChildren: () =>
      import('@views/pages/about/about.route').then((mod) => mod.ABOUT_ROUTES),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('@views/pages/services/service.route').then(
        (mod) => mod.SERVICE_ROUTE
      ),
  },
  {
    path: 'contacts',
    component: LandingLayoutComponent,
    loadChildren: () =>
      import('@views/pages/contacts/contact.route').then(
        (mod) => mod.CONTACT_ROUTES
      ),
  },
  {
    path: 'errors/404-1',
    component: ErrorV1Component,
    data: { title: '404 Not Found v1' },
  },
  {
    path: 'errors/404-2',
    component: ErrorV2Component,
    data: { title: '404 Not Found v2' },
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    component: AccountLayoutComponent,
    loadChildren: () =>
      import('@views/account/accounts.route').then((mod) => mod.ACCOUNT_ROUTES),
  },
  {
    path: 'account/sign-in',
    component: SigninComponent,
    data: { title: 'Account - Sign In' },
  },
  {
    path: 'account/sign-up',
    component: SignupComponent,
    data: { title: 'Account - Sign Up' },
  },
]
