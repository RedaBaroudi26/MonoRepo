import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, CategoryService, ProductService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  providers: [ProductService, CategoryService]
})
export class AddProductComponent implements OnInit {

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required,Validators.maxLength(50)]),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    rating: new FormControl(0, Validators.required),
    brand: new FormControl('', Validators.required),
    countStock: new FormControl(0, Validators.required),
    isFeatured: new FormControl(false, Validators.required),
    price: new FormControl(0, Validators.required),
    category: new FormControl('', Validators.required),
    thumbnail: new UntypedFormControl()
  });

  //thumbnail : any ;

  categories: Category[] = [];

  breadscrums = [
    {
      title: 'Add Product',
      items: ['Product'],
      active: 'Add Product',
    },
  ];

  constructor(private router: Router, private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (res) => { this.categories = res.categories }
    )
  }

  onSelectFile(event: any) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      const mimeType = event.target.files[0].type;

      if (mimeType.match(/image\/*/) == null) {

        return;
      }

      // this.thumbnail = file;

    }

  }


  onSubmit() {

    if (this.productForm.invalid) {
      return;
    }

    const formData = new FormData();

    const product = {
      title: this.productForm.controls['title'].value,
      description: this.productForm.controls['description'].value,
      content: this.productForm.controls['content'].value,
      rating: + (this.productForm.controls['rating'].value || 0),
      brand: this.productForm.controls['brand'].value,
      countStock: this.productForm.controls['countStock'].value,
      isFeatured: this.productForm.controls['isFeatured'].value,
      price: this.productForm.controls['price'].value,
      category: this.productForm.controls['category'].value
    }

    formData.append('thumbnail', this.productForm.controls['thumbnail'].value);
    formData.append('product', JSON.stringify(product));


    this.productService.persistProduct(formData).subscribe(() => {
      this.router.navigate(['/admin/product/all-products']);
    })

  }


}
