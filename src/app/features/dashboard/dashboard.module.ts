import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {TemplateModule} from '../../shared/components/template/template.module';
import {CardModule} from '../../shared/components/card/card.module';
import {TransactionHttpService} from './services/transaction-http.service';
import {AccountHttpService} from './services/account-http.service';
import {MakeTransferComponent} from './components/make-transfer/make-transfer.component';
import {DashboardService} from './services/dashboard.service';
import {FormErrorModule} from '../../shared/components/form-error/form-error.module';
import {BbUIModule} from '../../bb-ui/bb-ui.module';
import {ReviewTransactionService} from './services/review-transaction.service';
import {ReviewTransactionComponent} from './components/review-transaction/review-transaction.component';
import {ModalTemplateModule} from '../../shared/components/modal-template/modal-template.module';
import {TransactionListComponent} from './components/transaction-list/transaction-list.component';
import {CurrencyToCodeModule} from '../../shared/pipes/currency-to-code/currency-to-code.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TemplateModule,
    CardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormErrorModule,
    BbUIModule,
    ModalTemplateModule,
    CurrencyToCodeModule
  ],
  providers: [
    TransactionHttpService,
    AccountHttpService,
    DashboardService,
    ReviewTransactionService
  ],
  declarations: [DashboardComponent, MakeTransferComponent, ReviewTransactionComponent, TransactionListComponent],
  entryComponents: [ReviewTransactionComponent]
})
export class DashboardModule {
}
