import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MakeTransferComponent} from './make-transfer.component';
import {Currency, CurrencyCode} from '../../../../shared/enums/currency';
import {SimpleChange} from '@angular/core';

describe('MakeTransferComponent', () => {
  let component: MakeTransferComponent;
  let fixture: ComponentFixture<MakeTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MakeTransferComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.overrideTemplate(MakeTransferComponent, '').createComponent(MakeTransferComponent);
    component = fixture.componentInstance;
    component.data = {
      balance: 1000,
      currencyCode: CurrencyCode.EUR,
      currency: Currency.EUR,
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnChanges', () => {
    it('will reset form and set balance once balance is updated', () => {
      const reset = spyOn(component.form, 'reset');

      component.ngOnChanges({data: {currentValue: {balance: 100}} as SimpleChange});

      expect(reset).toHaveBeenCalled();
      expect(component.form.get('fromAccount').value).toEqual(100);
    });

    it('will not reset form nor set balance when balance is not updated', () => {
      const reset = spyOn(component.form, 'reset');

      component.ngOnChanges({data: {currentValue: {}} as SimpleChange});

      expect(reset).not.toHaveBeenCalled();
      expect(component.form.get('fromAccount').value).toEqual(null);
    });
  });

  describe('#onSubmit', () => {
    it('will emit value on submit', () => {
      const emit = spyOn(component.transferRequested, 'emit');

      component.ngOnInit();
      component.onSubmit();

      expect(emit).toHaveBeenCalledWith({
        toAccount: null,
        amount: null,
        currencyCode: CurrencyCode.EUR,
        currency: Currency.EUR,
        balance: 1000,
      });
    });

    it('given form is invalid will not emit value on submit', () => {
      const emit = spyOn(component.transferRequested, 'emit');
      component.form.setErrors({});

      component.ngOnInit();
      component.onSubmit();

      expect(emit).not.toHaveBeenCalled();
    });
  });
});
