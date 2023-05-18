import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { InfoOrderComponent } from './info-order/info-order.component';

const routes: Routes = [
  {
    path: 'all-orders',
    component: AllOrdersComponent
  },
  {
    path: 'add-order',
    component: AddOrderComponent
  },
  {
    path: 'info-order',
    component: InfoOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
