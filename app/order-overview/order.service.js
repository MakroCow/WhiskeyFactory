"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var order_model_1 = require("./order.model");
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        var _this = this;
        this.http = http;
        this.serviceUrl = "http://localhost:3000/api/orders";
        this.orders = new ReplaySubject_1.ReplaySubject();
        this.bsp1 = new order_model_1.Artikel(0, "test1", 4535, [0, 1, 5, 3, 4], 50);
        this.bsp2 = new order_model_1.Artikel(0, "test2", 5872, [0, 1, 5, 3, 4], 100);
        this.bsp3 = new order_model_1.Artikel(0, "test3", 8794, [0, 2, 4, 8, 9], 50);
        this.bsp4 = new order_model_1.Artikel(0, "test4", 1357, [0, 1, 5, 3, 4], 85);
        this.bsp5 = new order_model_1.Artikel(1, "gutscheinchen für die mama", 9832, [5, 0, 0, 0, 1], 50);
        this.getOrders().then(function (o) { return _this.orders.next(o); });
    }
    OrderService.prototype.getOrders = function () {
        //create customers
        var cust1 = new order_model_1.Kunde('Hans', 'Wurst', 'Musterstraße 3, 63450 Hanau');
        var cust2 = new order_model_1.Kunde('Max', 'Mustermann', 'Käferstraße 12, 12345 Berlin');
        var cust3 = new order_model_1.Kunde('Erna', 'Weißallesbesser', 'Musterstraße 3, 63450 Hanau');
        var cust4 = new order_model_1.Kunde('Katarina', 'Mustermann', 'Käferstraße 12, 12345 Berlin');
        return Promise.resolve([
            new order_model_1.Order("1", "Bestellung 1", '0121345', [this.bsp1, this.bsp3, this.bsp2, this.bsp5, this.bsp2], 200, cust1),
            new order_model_1.Order("2", "Bestellung 2", '7831458', [this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2], 150, cust2),
            new order_model_1.Order("3", "Bestellung 3", '7978178', [this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2], 100, cust3),
            new order_model_1.Order("4", "Bestellung 4", '1354879', [this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2], 50, cust4)
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
    };
    OrderService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map