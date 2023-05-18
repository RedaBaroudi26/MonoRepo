import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderService } from '@tp1-mono-repo/shared';

@Component({
  selector: 'app-info-order',
  templateUrl: './info-order.component.html',
  styleUrls: ['./info-order.component.scss'],
  providers: [OrderService]
})
export class InfoOrderComponent implements OnInit {

  breadscrums = [
    {
      title: 'Info Order',
      items: ['Order'],
      active: 'Info Order',
    },
  ];

  order : Order | undefined ;

  clientName : string = '' ;
  
  constructor( private orderService: OrderService , private route : ActivatedRoute) { }

  ngOnInit(): void {

   this.route.paramMap.subscribe(
    ( data ) => { this.orderService.getOneOrder(data.get('id')).subscribe(
      ( res : any ) => { this.order = res.order }
    ) }
   )

  }

  getColor(status:string=''){
    return status == 'pending' ? 'label-orange' :  status == 'cancled' ? 'label-red' : status == 'received' ? 'label-green' : 'label-purple'
  }

}
