import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { COMPONENTS } from './index';


@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class LayoutModule {
}
