import {Pipe, PipeTransform} from '@angular/core';

import {Currency, CurrencyCode} from '../../enums/currency';
import {mapCurrencyToCode} from '../../mappers/currency-to-code';

@Pipe({
  name: 'currencyToCode'
})
export class CurrencyToCodePipe implements PipeTransform {
  transform(value: Currency): CurrencyCode {
    return mapCurrencyToCode(value);
  }

}
