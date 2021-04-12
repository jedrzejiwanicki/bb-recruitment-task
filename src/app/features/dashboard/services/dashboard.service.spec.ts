import {DashboardService} from './dashboard.service';
import {TransactionHttpService} from './transaction-http.service';
import {AccountHttpService} from './account-http.service';
import {ReviewTransactionService} from './review-transaction.service';
import {of} from 'rxjs';
import {Transaction} from '../model/transaction';
import {Currency, CurrencyCode} from '../../../shared/enums/currency';

describe('DashboardService', () => {
  let service: DashboardService;
  let transactionHttpService: jasmine.SpyObj<TransactionHttpService>;
  let accountHttpService: jasmine.SpyObj<AccountHttpService>;
  let reviewTransactionService: jasmine.SpyObj<ReviewTransactionService>;

  beforeEach(() => {
    transactionHttpService = jasmine.createSpyObj(['updateTransactions']);
    transactionHttpService.updateTransactions.and.returnValue(of({} as Transaction));

    accountHttpService = jasmine.createSpyObj(['updateMyAccount']);
    accountHttpService.updateMyAccount.and.returnValue(of(null));

    reviewTransactionService = jasmine.createSpyObj(['review']);
    reviewTransactionService.review.and.returnValue(of(true));

    service = new DashboardService(transactionHttpService, accountHttpService, reviewTransactionService);
  });

  describe('#onTransferRequested', () => {
    it('given review modal is accepted, will successfully make a transfer', async () => {
      expect(await service.onTransferRequested({
        amount: 1000,
        balance: 2000,
        currencyCode: CurrencyCode.EUR,
        currency: Currency.EUR,
        toAccount: 'toAcc',
      })).toEqual([{} as Transaction, null]);
    });

    it('given review modal is not accepted, will not  make a transfer', async () => {
      reviewTransactionService.review.and.returnValue(of(false));

      expect(await service.onTransferRequested({
        amount: 1000,
        balance: 2000,
        currencyCode: CurrencyCode.EUR,
        currency: Currency.EUR,
        toAccount: 'toAcc',
      })).toEqual(null);
    });
  });
});
