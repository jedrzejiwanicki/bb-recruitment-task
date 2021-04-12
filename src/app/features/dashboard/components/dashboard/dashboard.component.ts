import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MakeTransferInput} from '../../model/make-transfer-input';
import {DashboardService} from '../../services/dashboard.service';
import {Transaction} from '../../model/transaction';
import {NewTransferEvent} from '../../model/new-transfer-event';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public makeTransferData$: Observable<MakeTransferInput>;
  public transactions$: Observable<Transaction[]>;

  constructor(
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit(): void {
    this.init();
  }

  onRequestedTransfer(event: NewTransferEvent): Promise<void> {
    return this.dashboardService.onTransferRequested(event)
      .then((data) => data && this.init());
  }

  private init(): void {
    this.makeTransferData$ = this.dashboardService.createMakeTransferData();
    this.transactions$ = this.dashboardService.getTransactions();
  }
}
