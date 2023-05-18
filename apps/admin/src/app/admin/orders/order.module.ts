import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { OrdersRoutingModule } from './order-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ComponentsModule } from 'apps/admin/src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { InfoOrderComponent } from './info-order/info-order.component';

@NgModule({
  declarations: [
    AddOrderComponent,
    AllOrdersComponent,
    InfoOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatRadioModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    OrdersRoutingModule,
    ComponentsModule,
    HttpClientModule,
    SharedModule
  ],
})
export class OrdersModule {}
