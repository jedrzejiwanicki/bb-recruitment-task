import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BbUIModule} from '../../../bb-ui/bb-ui.module';
import {TemplateComponent} from './template.component';

@NgModule({
  imports: [
    CommonModule,
    BbUIModule,
  ],
  declarations: [TemplateComponent],
  exports: [TemplateComponent]
})
export class TemplateModule {
}
