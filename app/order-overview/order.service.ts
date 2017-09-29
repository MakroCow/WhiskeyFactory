import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Order } from './order.model';

@Injectable()
export class OrderService {
    private serviceUrl : string = "http://localhost:3000/api/orders";

    constructor(private http: Http)
    {
        this.getOrders().then(o => this.orders.next(o));
    }

    public orders = new ReplaySubject<Order[]>();

    private getOrders(): Promise<Order[]> {

        return Promise.resolve([
            new Order("1", "Bestellung 1"),
            new Order("2", "Bestellung 2")
        ]);

        // return this.http.get(this.serviceUrl)
        //     .toPromise()
        //     .then(response => 
        //     {
        //         var json = response.json();
        //         var orders = json as Order[];
        //         return orders;
        //     })
        //     .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}