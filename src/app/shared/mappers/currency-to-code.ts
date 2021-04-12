import {Currency, CurrencyCode} from '../enums/currency';

export function mapCurrencyToCode(currency: Currency): CurrencyCode {
  switch (currency) {
    case Currency.EUR:
      return CurrencyCode.EUR;
  }
}
