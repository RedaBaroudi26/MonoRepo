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

import { CategoriesRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AllcategoriesComponent } from './all-categories/all-categories.component';
import { ComponentsModule } from 'apps/admin/src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddCategoryComponent,
    EditCategoryComponent,
    AllcategoriesComponent
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
    CategoriesRoutingModule,
    ComponentsModule,
    HttpClientModule,
    SharedModule
  ],
})
export class CategoriesModule {}
