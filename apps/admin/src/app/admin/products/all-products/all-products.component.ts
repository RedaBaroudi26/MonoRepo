import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
  providers : [ProductService]
})
export class AllProductsComponent implements OnInit {

  products : Product [] = [];
  
  breadscrums = [
    {
      title: 'All Products',
      items: ['Products'],
      active: 'All Products',
    },
  ];

  constructor( private productService : ProductService) {}
  
  ngOnInit(): void {
   this.productService.getAllProducts().subscribe(
    (res)=> { this.products = res.products }
   )
  }

  deleteProduct( idProduct : string = '' ){
   this.productService.deleteProduct(idProduct).subscribe(
    (res)=> { this.products = this.products.filter( pr => pr._id != idProduct ) }
   )
  }

}
