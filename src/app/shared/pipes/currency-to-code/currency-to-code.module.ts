import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CurrencyToCodePipe} from './currency-to-code.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrencyToCodePipe],
  exports: [CurrencyToCodePipe],
}) export class CurrencyToCodeModule {}
