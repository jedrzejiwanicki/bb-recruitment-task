import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {Transaction} from '../model/transaction';
import {randomString} from '../../../shared/utils/random-string';
import {NewTransferEvent} from '../model/new-transfer-event';
import {makeTransaction} from '../utils/make-transaction';

@Injectable()
export class TransactionHttpService {
  constructor(private http: HttpClient) {
  }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.API_URL}/data`);
  }

  public updateTransactions(data: NewTransferEvent): Observable<Transaction> {
    return this.http.post<Transaction>(`${environment.API_URL}/data`, {...makeTransaction(data), id: randomString()});
  }
}
