import {Currency, CurrencyCode} from '../../../shared/enums/currency';

export interface MakeTransferInput {
  balance: number;
  currencyCode: CurrencyCode;
  currency: Currency;
}
