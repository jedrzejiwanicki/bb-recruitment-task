import {Currency} from '../../../shared/enums/currency';

export interface Transaction {
  categoryCode: string;
  dates: TransactionDates;
  merchant: TransactionMerchant;
  transaction: TransactionDetails;
}

export interface TransactionDates {
  valueDate: number;
}

export interface TransactionDetails {
  amountCurrency: TransactionAmountCurrency;
  type: string;
  creditDebitIndicator: string;
}

export interface TransactionAmountCurrency {
  amount: number;
  currencyCode: Currency;
}

export interface TransactionMerchant {
  name: string;
  accountNumber: string;
}

export enum TransactionDebitIndicator {
  DBIT = 'DBIT',
  CRDT = 'CRDT'
}

export enum TransactionType {
  Transaction= 'Transaction',
  Salaries = 'Salaries',
  CardPayment = 'Card Payment',
  OnlineTransfer = 'Online Transfer',
}

export enum TransactionSymbol {
  Negative= '-',
  Positive = ''
}
