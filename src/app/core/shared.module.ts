import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/*import * as shared from '../shared/components';*/


@NgModule({
  declarations: [/*...shared.components*/],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    MaterialModule
    /*...shared.components*/
  ]
})
export class SharedModule {
}
