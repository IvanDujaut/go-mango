import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgOptimizedImage } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AllBenefitsComponent } from './modules/all-benefits/component/all-benefits.component'
import { BenefitLandingComponent } from './modules/benefit-landing/component/benefit-landing.component'
import { BirthdatesComponent } from './modules/birthdates/component/birthdates.component'
import { ClientBenefitsComponent } from './modules/client-benefits/component/client-benefits.component'
import { CuponLandingComponent } from './modules/cupon-landing/component/cupon-landing.component'
import { HomeComponent } from './modules/home/component/home.component'
import { ToolbarComponent } from './shared/toolbar/component/toolbar.component'
import { CardsComponent } from './shared/cards/component/cards.component'
import { SearchInputComponent } from './shared/search-input/component/search-input.component'
import { FooterComponent } from './shared/footer/component/footer.component'
import { CategoryButtonComponent } from './shared/category-button/component/category-button.component'
import { SecondaryCardComponent } from './shared/secondary-card/component/secondary-card.component'
import { GraphQLModule } from './graphql.module';


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

