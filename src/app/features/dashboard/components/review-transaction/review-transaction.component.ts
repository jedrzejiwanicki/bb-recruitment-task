import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {NewTransferEvent} from '../../model/new-transfer-event';

@Component({
  selector: 'app-review-transaction',
  templateUrl: './review-transaction.component.html',
  styleUrls: ['./review-transaction.component.scss']
})
export class ReviewTransactionComponent {
  @Input() event: NewTransferEvent;

  constructor(private modal: NgbActiveModal) {
  }

  close(result: boolean): void {
    this.modal.close(result);
  }
}
