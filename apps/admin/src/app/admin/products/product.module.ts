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

import { ProductsRoutingModule } from './product-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AllProductsComponent } from './all-products/all-products.component';
import { ComponentsModule } from 'apps/admin/src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddProductComponent ,
    EditProductComponent ,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ProductsRoutingModule,
    ComponentsModule,
    HttpClientModule,
    SharedModule
  ],
})
export class ProductModule {}
