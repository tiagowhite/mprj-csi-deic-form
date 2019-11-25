import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EnsureModuleLoadedOnceGuard } from '@core/ensureModuleLoadedOnceGuard';


import * as core from '../core/components';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [...core.components],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule
  ],
  exports: [
    ...core.components
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
