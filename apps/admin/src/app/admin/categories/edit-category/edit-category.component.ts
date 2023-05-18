import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
  providers :  [CategoryService]
})
export class EditCategoryComponent implements OnInit{
  
  categoryForm = new FormGroup({
    label : new FormControl('' , Validators.required) , 
    icon : new FormControl('' , Validators.required) ,
    color : new FormControl('',Validators.required)
  })

  idCategory : string = "" ;

  breadscrums = [
    {
      title: 'Edit Category',
      items: ['Category'],
      active: 'Edit Category',
    },
  ];

  constructor(private categoryService : CategoryService ,private route: ActivatedRoute, private router: Router) {
   
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (data: any) => {
        if (data.get('id')) {
          this.idCategory = data.get('id');
          this.categoryService.getOneCategory(data.get('id')).subscribe(
            ({ success, category }: any) => {
              if (success)
                this.categoryForm.get('label')?.setValue(category.label) ;
                this.categoryForm.get('icon')?.setValue(category.icon) ;
                this.categoryForm.get('color')?.setValue(category.color) ;
            })
        }
      })
  }

  onSubmit() {

    if (this.categoryForm.valid) {

      const category : Category = {
        label : this.categoryForm.get('label')?.value || '' , 
        icon :   this.categoryForm.get('icon')?.value || '' ,
        color :  this.categoryForm.get('color')?.value || '' 
      }

      this.categoryService.updateCategory(this.idCategory,category).subscribe(
        ({ success }: any) => {
          if (success) {
            this.router.navigate(['/admin/category/all-categories'])
          }
        }
      )
    }
    
  }

}
