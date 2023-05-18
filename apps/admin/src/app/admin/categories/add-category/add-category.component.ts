import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, CategoryService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers : [CategoryService]
})
export class AddCategoryComponent {

  categoryForm = new FormGroup({
    label : new FormControl('' , Validators.required) , 
    icon : new FormControl('' , Validators.required) ,
    color : new FormControl('' , Validators.required)
  }) ;

  breadscrums = [
    {
      title: 'Add Category',
      items: ['Category'],
      active: 'Add Category',
    },
  ];

  constructor( private categoryService : CategoryService , private router : Router ) {}


  onSubmit() {

    if(this.categoryForm.invalid){
      return ;
    }

    const category : Category = {
      label : this.categoryForm.get('label')?.value || '' ,
      icon : this.categoryForm.get('icon')?.value || '' ,
      color : this.categoryForm.get('color')?.value || '' 
    } ;

    this.categoryService.createCategory(category).subscribe(
      (res) => { this.categoryForm.reset() ; this.router.navigate(['admin/category/all-categories']) }
    )
    
  }


}
