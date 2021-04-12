import {Currency, CurrencyCode} from '../../../shared/enums/currency';

export interface NewTransferEvent {
  amount: number;
  balance: number;
  currencyCode: CurrencyCode;
  currency: Currency;
  toAccount: string;
}
