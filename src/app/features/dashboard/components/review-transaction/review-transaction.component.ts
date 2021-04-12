import {Component, Input} from '@angular/core';
import {NewTransferEvent} from '../../model/new-transfer-event';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

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
