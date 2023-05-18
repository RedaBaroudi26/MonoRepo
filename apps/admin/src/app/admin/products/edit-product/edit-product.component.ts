import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService, ProductService, ResCategory, ResProduct } from '@tp1-mono-repo/shared';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  providers: [ProductService, CategoryService]
})
export class EditProductComponent implements OnInit {

  productForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    rating: new FormControl(0, Validators.required),
    brand: new FormControl('', Validators.required),
    countStock: new FormControl(0, Validators.required),
    isFeatured: new FormControl(false, Validators.required),
    price: new FormControl(0, Validators.required),
    category: new UntypedFormControl( Validators.required)
  });

  thumbnail : any ;

  idProduct: string = "";

  categories: Category[] = [];

  breadscrums = [
    {
      title: 'Edit Product',
      items: ['Product'],
      active: 'Edit Product',
    },
  ];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (data: any) => {
        if (data.get('id')) {
          this.idProduct = data.get('id')
          this.productService.getOneProduct(data.get('id')).subscribe(
            (res) => {
              this.productForm.get('title')?.setValue(res.product.title)
              this.productForm.get('brand')?.setValue(res.product.brand)
              this.productForm.get('description')?.setValue(res.product.description)
              this.productForm.get('content')?.setValue(res.product.content)
              this.productForm.get('rating')?.setValue(res.product.rating)
              this.productForm.get('countStock')?.setValue(res.product.countStock)
              this.productForm.get('isFeatured')?.setValue(res.product.isFeatured)
              this.productForm.get('price')?.setValue(res.product.price)
              this.productForm.get('category')?.setValue( res.product.category || '' )
            }
          )
        }
      });

    this.categoryService.getAllCategories().subscribe(({ success, categories }: ResCategory) => {
      if (success) {
        this.categories = categories
      }

    })

  }

  onSelectFile(event: any) {

    if (event.target.files.length > 0) {

      const file = event.target.files[0];

      const mimeType = event.target.files[0].type;

      if (mimeType.match(/image\/*/) == null) {
       
        return ;
      }

      this.thumbnail = file;
       
    } 

  }

  onSubmit() {

    const formData = new FormData();
   
    const product = {
      title: this.productForm.controls['title'].value,
      description: this.productForm.controls['description'].value,
      content: this.productForm.controls['content'].value,
      rating: +(this.productForm.controls['rating'].value || 0),
      brand: this.productForm.controls['brand'].value,
      countStock: this.productForm.controls['countStock'].value,
      isFeatured: this.productForm.controls['isFeatured'].value,
      price: this.productForm.controls['price'].value,
      category: this.productForm.controls['category'].value
    }

    formData.append('thumbnail', this.thumbnail );
    formData.append('product', JSON.stringify(product));

    this.productService.putProduct(this.idProduct, formData).subscribe(({ success }: ResProduct) => {
      if (success) {
        this.router.navigate(['/admin/product/all-products']);
      }
    })

  }

}
