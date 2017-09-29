import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import {Order, Pos, Whisky} from './order.model';

@Injectable()
export class OrderService {
    private serviceUrl : string = "http://localhost:3000/api/orders";

        constructor(private http: Http)
    {
        this.getOrders().then(o => this.orders.next(o));
    }

    public orders = new ReplaySubject<Order[]>();

    bsp1 = new Whisky("test1", 4535, [0,1,5,3,4]);
    bsp2 = new Whisky("test2", 587, [0,1,5,3,4]);
    bsp3 = new Whisky("test3", 8794, [0,2,4,8,9]);
    bsp4 = new Whisky("test4", 1357, [0,1,5,3,4]);
    bsp5 = new Whisky("test5", 9832, [5,0,0,0,1]);

    private getOrders(): Promise<Order[]> {

        return Promise.resolve([
            new Order("1", "Bestellung 1", '0121345', new Pos(this.bsp1, this.bsp3, this.bsp2, this.bsp5, this.bsp2), 200),
            new Order("2", "Bestellung 2", '7831458', new Pos(this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2), 150),
            new Order("3", "Bestellung 3", '7978178', new Pos(this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2), 100),
            new Order("4", "Bestellung 4", '1354879', new Pos(this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2), 50)
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