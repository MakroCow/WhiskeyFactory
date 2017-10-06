import {Component, OnInit} from '@angular/core';


import { Order } from '../order-overview/order.model';
import { OrderService } from '../order-overview/order.service';
import {Router} from "@angular/router";

@Component({
    selector: 'bestelldetail',
    moduleId: module.id,
    templateUrl: 'bestelldetail.html'
})
export class BestelldetailComponent implements OnInit{

    constructor(private orderService: OrderService,
                private router: Router) {

/*        orderService.orders.subscribe(allOrders => {
            this.orders = allOrders;
            this.selectedOrder = allOrders[0]
        });*/

    }

    ngOnInit(){
        this.router.params.subscribe(params => {
            this.orderid = +params['orderid'];
        });
    }

    onSelect(order : Order){
        this.router.navigate(['/bestelldetail/', order.id]);
    }


}