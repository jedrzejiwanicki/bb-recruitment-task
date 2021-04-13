import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';

import {ReviewTransactionComponent} from '../components/review-transaction/review-transaction.component';
import {NewTransferEvent} from '../model/new-transfer-event';

@Injectable()
export class ReviewTransactionService {
  constructor(private modalService: NgbModal) {
  }

  public review(event: NewTransferEvent): Observable<boolean> {
    const ref = this.modalService.open(ReviewTransactionComponent);

    ref.componentInstance.event = event;

    return ref.closed;
  }
}
