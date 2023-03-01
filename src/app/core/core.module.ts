import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootModule } from '../../app/modules/root/index';

@NgModule({
    imports: [
        CommonModule,
        RootModule.forRoot()
    ]
})
export class CoreModule { }