import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';

import {DashboardComponent} from './dashboard.component';
import {DashboardService} from '../../services/dashboard.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let dashboardService: jasmine.SpyObj<DashboardService>;

  beforeEach(async () => {
    dashboardService = jasmine.createSpyObj(['onTransferRequested', 'createMakeTransferData', 'getTransactions']);
    dashboardService.onTransferRequested.and.returnValue(Promise.resolve([null, null]));
    dashboardService.getTransactions.and.returnValue(of([]));
    dashboardService.createMakeTransferData.and.returnValue(null);

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{provide: DashboardService, useValue: dashboardService}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('will initialize component', () => {
      component.ngOnInit();

      expect(component.transactions$).toBeDefined();
      expect(component.makeTransferData$).toBeDefined();
    });
  });

  describe('#onRequestedTransfer', () => {
    it('will request transfer and re-init component', (done) => {
      const init = spyOn(component as any, 'init');

      component.onRequestedTransfer(null)
        .then(() => {
          expect(init).toHaveBeenCalled();
          done();
        });
    });
  });
});
