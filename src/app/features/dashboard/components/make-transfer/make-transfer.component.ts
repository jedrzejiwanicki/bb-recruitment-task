import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {MakeTransferInput} from '../../model/make-transfer-input';
import {validatePositiveNumber} from '../../../../shared/validators/positive-number.validator';
import {validateRequired} from '../../../../shared/validators/required.validator';
import {validateAdjecentControlValueLessThan} from '../../../../shared/validators/adjecent-control-value-less-than.validator';
import {NewTransferEvent} from '../../model/new-transfer-event';

@Component({
  selector: 'app-make-transfer',
  templateUrl: './make-transfer.component.html',
  styleUrls: ['./make-transfer.component.scss']
})
export class MakeTransferComponent implements OnInit, OnChanges {
  @Input() data: MakeTransferInput;
  @Output() transferRequested: EventEmitter<NewTransferEvent> = new EventEmitter();

  public form: FormGroup = new FormGroup({
    fromAccount: new FormControl(null),
    toAccount: new FormControl(null),
    amount: new FormControl(null),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.data && changes.data.currentValue?.balance) {
      this.form.reset();
      this.form.get('fromAccount').setValue(changes.data.currentValue?.balance);
    }
  }

  ngOnInit(): void {
    this.setUpValidators();
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.transferRequested.emit({
      toAccount: this.form.get('toAccount').value,
      amount: this.form.get('amount').value,
      currencyCode: this.data.currencyCode,
      currency: this.data.currency,
      balance: this.data.balance,
    });
  }

  private setUpValidators(): void {
    const fromAccount = this.form.get('fromAccount') as FormControl;

    this.form.get('toAccount').setValidators(validateRequired('This field is required'));
    this.form.get('amount').setValidators([
      validateAdjecentControlValueLessThan(`There is not enough balance`, fromAccount, -500),
      validateRequired('This field is required'),
      validatePositiveNumber('Amount has to be greater than 0'),
    ]);
  }
}
