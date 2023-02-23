import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AllBenefitsComponent } from './pages/all-benefits/all-benefits.component'
import { BenefitLandingComponent } from './pages/benefit-landing/benefit-landing.component'
import { BirthdatesComponent } from './pages/birthdates/birthdates.component'
import { ClientBenefitsComponent } from './pages/client-benefits/client-benefits.component'
import { CuponLandingComponent } from './pages/cupon-landing/cupon-landing.component'
import { HomeComponent } from './pages/home/home.component'

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

