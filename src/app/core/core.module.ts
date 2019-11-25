import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { EnsureModuleLoadedOnceGuard } from '@core/ensureModuleLoadedOnceGuard';
import * as core from '../core/components';

@NgModule({
  declarations: [...core.components],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    ...core.components,
    MaterialModule
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
