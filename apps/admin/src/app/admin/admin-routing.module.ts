import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./categories/category.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./products/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./orders/order.module').then((m) => m.OrdersModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./users/user.module').then((m) => m.UsersModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
