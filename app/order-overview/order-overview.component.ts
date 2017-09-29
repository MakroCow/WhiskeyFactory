import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Order } from './order.model';
import { OrderService } from './order.service';

@Component({
    selector: 'order-overview',
    styleUrls: ['order-overview.css'],
    moduleId: module.id,
    templateUrl: 'order-overview.html'
})
export class OrderOverviewComponent {

    constructor(private orderService: OrderService) {

            orderService.orders.subscribe(allOrders => {
                this.orders = allOrders;
                this.selectedOrder = allOrders[0]
        });

    }

    public orders: Order[];
    public selectedOrder: Order;


    selectOrder(selectedOrder: Order)
    {
        this.selectedOrder = selectedOrder;
    }   
}

