import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllBenefitsComponent } from './modules/all-benefits/component/all-benefits.component'
import { BenefitLandingComponent } from './modules/benefit-landing/component/benefit-landing.component'
import { BirthdatesComponent } from './modules/birthdates/component/birthdates.component'
import { ClientBenefitsComponent } from './modules/client-benefits/component/client-benefits.component'
import { CuponLandingComponent } from './modules/cupon-landing/component/cupon-landing.component'
import { HomeComponent } from './modules/home/component/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'all-benefits/:category',
    component: AllBenefitsComponent
  },
  {
    path: 'all-benefits',
    component: AllBenefitsComponent
  },
  {
    path: 'benefit',
    component: BenefitLandingComponent
  },
  {
    path: 'our-benefits',
    component: ClientBenefitsComponent
  },
  {
    path: 'birthdates',
    component: BirthdatesComponent
  },
  {
    path: 'cupon',
    component: CuponLandingComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

