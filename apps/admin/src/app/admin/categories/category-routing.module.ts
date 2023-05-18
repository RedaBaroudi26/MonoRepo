import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllcategoriesComponent } from './all-categories/all-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';

const routes: Routes = [
  {
    path: 'all-categories',
    component: AllcategoriesComponent
  },
  {
    path: 'add-category',
    component: AddCategoryComponent
  },
  {
    path: 'edit-category/:id',
    component: EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
