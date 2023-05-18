import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss'],
  providers : [CategoryService]
})
export class AllcategoriesComponent implements OnInit {

  categories : Category[] = [] ;
  
  breadscrums = [
    {
      title: 'All Categories',
      items: ['Categories'],
      active: 'All Categories',
    },
  ];

  constructor( private categoryService : CategoryService) {}
  
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      ( res  ) => { this.categories = res.categories }
    )
  }

  deleteCategory( idCategory : string = '' ){
    this.categoryService.deleteCategory(idCategory).subscribe(
      ( res ) => { this.categories = this.categories.filter( cat =>  cat._id != idCategory  ) }    
    )
  }

}
