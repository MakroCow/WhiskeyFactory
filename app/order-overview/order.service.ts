import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import {Order, Artikel, Kunde} from './order.model';

@Injectable()
export class OrderService {
    private serviceUrl : string = "http://localhost:3000/api/orders";
        constructor(private http: Http)
    {
        this.getOrders().then(o => this.orders.next(o));
    }

    public orders = new ReplaySubject<Order[]>();

    bsp1 = new Artikel(0, "test1", 4535, [0,1,5,3,4], 50);
    bsp2 = new Artikel(0, "test2", 5872, [0,1,5,3,4], 100);
    bsp3 = new Artikel(0, "test3", 8794, [0,2,4,8,9], 50);
    bsp4 = new Artikel(0, "test4", 1357, [0,1,5,3,4], 85);
    bsp5 = new Artikel(1, "gutscheinchen für die mama", 9832, [5,0,0,0,1], 50);

    private getOrders(): Promise<Order[]> {

        //create customers
        let cust1 = new Kunde('Hans', 'Wurst', 'Musterstraße 3, 63450 Hanau');
        let cust2 = new Kunde('Max', 'Mustermann', 'Käferstraße 12, 12345 Berlin');
        let cust3 = new Kunde('Erna', 'Weißallesbesser', 'Musterstraße 3, 63450 Hanau');
        let cust4 = new Kunde('Katarina', 'Mustermann', 'Käferstraße 12, 12345 Berlin');

        return Promise.resolve([
            new Order("1", "Bestellung 1", '0121345', [this.bsp1, this.bsp3, this.bsp2, this.bsp5, this.bsp2], 200, cust1),
            new Order("2", "Bestellung 2", '7831458', [this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2], 150, cust2),
            new Order("3", "Bestellung 3", '7978178', [this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2], 100, cust3),
            new Order("4", "Bestellung 4", '1354879', [this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2], 50, cust4)
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