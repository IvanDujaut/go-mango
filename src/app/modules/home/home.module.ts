/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule  } from './home-routing-module';
import { HomeComponent } from './component/home.component';
import { ToolbarModule } from '../../shared/toolbar/index';
//import { ToolbarComponent } from '../../shared/toolbar/component/toolbar.component';
import { FooterModule } from '../../shared/footer/index';
//import { FooterComponent } from '../../shared/footer/component/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    //ToolbarComponent,
    //FooterComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    HomeRoutingModule,
    FooterModule
  ]
})
export class HomeModule { }*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule  } from './home-routing-module';
import { HomeComponent } from './component/home.component';
import { ToolbarModule } from '../../shared/toolbar';
import { FooterModule } from '../../shared/footer';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToolbarModule,
    FooterModule
  ]
})
export class HomeModule { }
