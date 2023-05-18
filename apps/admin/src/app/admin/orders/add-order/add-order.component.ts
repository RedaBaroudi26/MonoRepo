import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Order, OrderService, OrderTable, Product, ProductService, SelectedProduct, User, UserService } from '@tp1-mono-repo/shared';
import { OrderItem } from 'libs/shared/src/lib/models/orderItems';

@Component({
  selector: 'app-edit-category',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
  providers: [UserService, OrderService, ProductService]
})
export class AddOrderComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
  });

  secondFormGroup = this._formBuilder.group({
  });

  thirdFormGroup = this._formBuilder.group({
  });

  forthFormGroup = this._formBuilder.group({
  });

  breadscrums = [
    {
      title: 'Add Order',
      items: ['Order'],
      active: 'Add Order',
    },
  ];

  users: User[] = [];

  userMode: string = 'existing User';

  element_data: OrderTable[] = [];

  dataSource: any;

  selectedProducts: SelectedProduct[] = [];

  order = {} ;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  orderForm = new FormGroup({
    shippingAdress: new FormControl('', Validators.required),
    invoiceAdress: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  userSelected: User = {
    name: '',
    email: '',
    adress: '',
    city: '',
    country: '',
    phone: '',
    isAdmin: false
  };

  displayedColumns: string[] = [
    'checked',
    'thumbnail',
    'title',
    'category',
    'quantity'
  ];

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private productService: ProductService, private orderService: OrderService , private router : Router) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(
      (res) => { this.users = res.users }
    )

    this.productService.getAllProducts().subscribe(
      (res) => {
        this.element_data = res.products.map((pr) => {
          let orderTable: OrderTable = {
            checked: false,
            product: pr,
            quantity: 0
          }
          return orderTable
        }
        )
        this.dataSource = new MatTableDataSource<OrderTable>(this.element_data);
      }
    )

  }

  addUser() {

    if (this.userForm.valid) {

      let user: User = {
        name: this.userForm.controls['name'].value || '',
        email: this.userForm.controls['email'].value || '',
        adress: this.userForm.controls['adress'].value || '',
        city: this.userForm.controls['city'].value || '',
        country: this.userForm.controls['country'].value || '',
        phone: this.userForm.controls['phone'].value || '',
        isAdmin: false
      }

      this.userService.addUser(user).subscribe(
        (res) => { this.userSelected = res.user }
      )

    }

  }

  addProducts() {

    this.element_data.forEach(
      (el) => {
        if (el.checked) {
          let orderItem = {
            product: el.product,
            quantity: el.quantity
          }
          this.selectedProducts.push(orderItem)
        }
      }
    )

  }

  addOrder() {

    let orderItems: OrderItem[] = []

    this.selectedProducts.forEach(
      (ob) => orderItems.push({ product: ob.product._id, quantity: ob.quantity, price: ob.product.price })
    )

    this.order = {
      shippingAdress: this.orderForm.controls['shippingAdress'].value || '',
      invoiceAdress: this.orderForm.controls['invoiceAdress'].value || '',
      city: this.orderForm.controls['city'].value || '',
      country: this.orderForm.controls['country'].value || '',
      phone: this.orderForm.controls['phone'].value || '',
      user: this.userSelected._id || '' ,
      items: orderItems
    }

  }

  totalOrder() {
    return this.selectedProducts.reduce(
      (total, order) => total + (order.product.price * order.quantity), 0)
  }

  validateOrder() {

    if (this.order) {
      this.orderService.createOrder(this.order).subscribe(
        (res) => { this.router.navigate(['/amin/order/all-orders']) }
      )
    }

  }

}
