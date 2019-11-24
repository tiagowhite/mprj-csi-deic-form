import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';

import * as core from '../core/components';

@NgModule({
  declarations: [...core.components],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    ...core.components
  ]
})
export class CoreModule {
}
