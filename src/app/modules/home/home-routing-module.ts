import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppRoute } from '../../core/config/constants/app-routes.config';
import { AuthGuard } from '../../core/guards/index';

import { HomeComponent } from '../../modules/home/component/home.component';

const HOME_ROUTES: Routes = [
  {
    path: AppRoute.Home, component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {path: AppRoute.OwnBenefits, loadChildren: () => import('../benefit-landing').then(_m => _m.BenefitLandingModule)},
      //{path: AppRoute.Activities, loadChildren: () => import('../activities').then(_m => _m.)},
      {path: AppRoute.Birthdates, loadChildren: () => import('../birthdates').then(_m => _m.BirthdatesModule)},
      //{path: AppRoute.News, loadChildren: () => import('../news').then(_m => _m.)},
      //{path: AppRoute.Giveaways, loadChildren: () => import('../giveaways').then(_m => _m.)},
      //{path: AppRoute.Suggestions, loadChildren: () => import('../suggestions').then(_m => _m.)},
      //{path: AppRoute.Login, loadChildren: () => import('../login').then(_m => _m.)}
    ]
  } //key: children --> se van a ir definiendo los hjos de dashboard que a su vez van a ser modulos
];

@NgModule({
  imports: [RouterModule.forChild(HOME_ROUTES)],
  exports: [RouterModule]
})

export class HomeRoutingModule {}