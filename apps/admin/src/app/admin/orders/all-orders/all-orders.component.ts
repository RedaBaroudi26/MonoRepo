import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
  providers : [ OrderService ]
})
export class AllOrdersComponent implements OnInit {

  orders : any [] = [ ] ;
  
  breadscrums = [
    {
      title: 'All Orders',
      items: ['Orders'],
      active: 'All Orders',
    },
  ];

  constructor(private orderService : OrderService) {}
  
  ngOnInit(): void {

    this.orderService.getAllOrders().subscribe(
      ( res ) => { this.orders = res.orders }
    )
  
  }

  deleteOrder( idOrder : string = '' ){
    
  }

  getColor(status:string){
    return status == 'pending' ? 'col-orange' :  status == 'cancled' ? 'col-red' : status == 'received' ? 'col-green' : 'col-purple'
  }

}
