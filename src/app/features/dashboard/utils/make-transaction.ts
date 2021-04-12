import {Transaction, TransactionDebitIndicator, TransactionType} from '../model/transaction';
import {randomColor} from '../../../shared/utils/random-color';
import {NewTransferEvent} from '../model/new-transfer-event';

export function makeTransaction(data: NewTransferEvent): Transaction {
  return {
    categoryCode: randomColor(),
    dates: {
      valueDate: new Date().getTime(),
    },
    merchant: {
      name: data.toAccount,
      accountNumber: '',
    },
    transaction: {
      amountCurrency: {
        currencyCode: data.currency,
        amount: data.amount,
      },
      type: TransactionType.OnlineTransfer,
      creditDebitIndicator: TransactionDebitIndicator.DBIT
    }
  };
}
