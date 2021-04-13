import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

import {TransactionHttpService} from './transaction-http.service';
import {AccountHttpService} from './account-http.service';
import {MakeTransferInput} from '../model/make-transfer-input';
import {mapCurrencyToCode} from '../../../shared/mappers/currency-to-code';
import {Transaction} from '../model/transaction';
import {NewTransferEvent} from '../model/new-transfer-event';
import {ReviewTransactionService} from './review-transaction.service';
import {MyAccount} from '../model/my-account';

@Injectable()
export class DashboardService {
  constructor(
    private transactionHttpService: TransactionHttpService,
    private accountHttpService: AccountHttpService,
    private reviewTransactionService: ReviewTransactionService
  ) {
  }

  public createMakeTransferData(): Observable<MakeTransferInput> {
    return this.accountHttpService.getMyAccount()
      .pipe(map(({balance, currency}) => ({balance, currency, currencyCode: mapCurrencyToCode(currency)})));
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.transactionHttpService.getTransactions().pipe(
      map(t => t.sort((t1, t2) => t2.dates.valueDate - t1.dates.valueDate))
    );
  }

  public onTransferRequested(event: NewTransferEvent): Promise<[Transaction, MyAccount]> {
    const review$ = this.reviewTransactionService.review(event).pipe(take(1));
    const makeTransfer$ = this.makeTransfer(event).pipe(take(1));

    return review$
      .toPromise()
      .then((isConfirmed: boolean) => isConfirmed ? makeTransfer$.toPromise() : null);
  }

  // This obviously wouldn't be implemented like this in real life scenario, this should be handled on server side
  // while transaction is made.

  private makeTransfer(event: NewTransferEvent): Observable<[Transaction, MyAccount]> {
    return combineLatest([
      this.transactionHttpService.updateTransactions(event),
      this.accountHttpService.updateMyAccount({balance: event.balance - event.amount, currency: event.currency})
    ]);
  }
}
