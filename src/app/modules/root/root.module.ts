import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { LoginModule } from '../login';
import { HomeModule } from '../home';

//import { ENVIRONMENT } from '@app/core/services/environment-service/environment.service';
//import { environment } from '@env/environment';
//import { HttpRequestInterceptor } from '@config/http-request-interceptor/http-request.interceptor';
//import { JwtInterceptor } from '@app/core/config/jwt-interceptor/jwt.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //LoginModule,
    HomeModule
  ],
  exports: [
    HomeModule
  ],
})
export class RootModule {
  static forRoot(): ModuleWithProviders<RootModule> {
    return {
      ngModule: RootModule
    };
  }
}
