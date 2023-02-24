import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgOptimizedImage } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ToolbarComponent } from './shared/toolbar/toolbar.component'
import { CardsComponent } from './shared/cards/cards.component'
import { SearchInputComponent } from './shared/search-input/search-input.component'
import { FooterComponent } from './shared/footer/footer.component'
import { CategoryButtonComponent } from './shared/category-button/category-button.component'
import { HomeComponent } from './pages/home/home.component'
import { SecondaryCardComponent } from './shared/secondary-card/secondary-card.component'
import { AllBenefitsComponent } from './pages/all-benefits/all-benefits.component'
import { BenefitLandingComponent } from './pages/benefit-landing/benefit-landing.component'
import { ClientBenefitsComponent } from './pages/client-benefits/client-benefits.component'
import { BirthdatesComponent } from './pages/birthdates/birthdates.component'
import { CuponLandingComponent } from './pages/cupon-landing/cupon-landing.component'
import { GraphQLModule } from './graphql.module'


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardsComponent,
    SearchInputComponent,
    FooterComponent,
    CategoryButtonComponent,
    HomeComponent,
    SecondaryCardComponent,
    AllBenefitsComponent,
    BenefitLandingComponent,
    ClientBenefitsComponent,
    BirthdatesComponent,
    CuponLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

