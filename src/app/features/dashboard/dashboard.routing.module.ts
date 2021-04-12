import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardRoutingModule {
}
