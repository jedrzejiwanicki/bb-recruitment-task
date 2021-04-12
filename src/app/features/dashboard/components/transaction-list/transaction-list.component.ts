import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Transaction, TransactionDebitIndicator, TransactionSymbol, TransactionType} from '../../model/transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnChanges {
  @Input() data: Transaction[];

  public transactions$: Observable<Transaction[]>;

  private input$: BehaviorSubject<string> = new BehaviorSubject('');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.transactions$ = this.getTransactions();
    }
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.input$
      .pipe(
        map(input => (this.data || [])
          .filter(t => input ? t.merchant.name.startsWith(input) : true)
        )
      );
  }

  onInputChange(event: string): void {
    this.input$.next(event);
  }

  // Assuming this is how we figure whether "-" should be used.
  getTransactionSymbol(transaction: Transaction): TransactionSymbol {
    return transaction.transaction.creditDebitIndicator === TransactionDebitIndicator.DBIT
      ? TransactionSymbol.Negative
      : TransactionSymbol.Positive;
  }
}
