import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewTransactionComponent} from './review-transaction.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Currency, CurrencyCode} from '../../../../shared/enums/currency';

describe('ReviewTransactionComponent', () => {
  let component: ReviewTransactionComponent;
  let fixture: ComponentFixture<ReviewTransactionComponent>;
  let activeModal: jasmine.SpyObj<NgbActiveModal>;

  beforeEach(async () => {
    activeModal = jasmine.createSpyObj(['close']);

    await TestBed.configureTestingModule({
      declarations: [ReviewTransactionComponent],
      providers: [{provide: NgbActiveModal, useValue: activeModal}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTransactionComponent);
    component = fixture.componentInstance;
    component.event = {
      amount: 10,
      balance: 100,
      currencyCode: CurrencyCode.EUR,
      currency: Currency.EUR,
      toAccount: 'name',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
