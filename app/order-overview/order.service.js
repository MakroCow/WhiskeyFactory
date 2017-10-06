"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var order_service_abstract_1 = require("../contracts/order.service.abstract");
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.serviceUrl = "http://localhost:3000/api/orders";
        _this.orders = new ReplaySubject_1.ReplaySubject();
        _this.bsp1 = new order_model_1.Artikel(0, 0, "test1", 4535, [0, 1, 5, 3, 4], 50);
        _this.bsp2 = new order_model_1.Artikel(0, 1, "test2", 5872, [0, 1, 5, 3, 4], 100);
        _this.bsp3 = new order_model_1.Artikel(0, 2, "test3", 8794, [0, 2, 4, 8, 9], 50);
        _this.bsp4 = new order_model_1.Artikel(0, 1, "test4", 1357, [0, 1, 5, 3, 4], 85);
        _this.bsp5 = new order_model_1.Artikel(1, 0, "gutscheinchen für die mama", 9832, [5, 0, 0, 0, 1], 50);
        //create customers
        _this.cust1 = new order_model_1.Kunde('Hans', 'Wurst', 'Musterstraße 3, 63450 Hanau');
        _this.cust2 = new order_model_1.Kunde('Max', 'Mustermann', 'Käferstraße 12, 12345 Berlin');
        _this.cust3 = new order_model_1.Kunde('Erna', 'Weißallesbesser', 'Musterstraße 3, 63450 Hanau');
        _this.cust4 = new order_model_1.Kunde('Katarina', 'Mustermann', 'Käferstraße 12, 12345 Berlin');
        _this.orderarray = [
            new order_model_1.Order("1", "Bestellung 1", '0121345', [_this.bsp1, _this.bsp3, _this.bsp2, _this.bsp5, _this.bsp2], 200, _this.cust1),
            new order_model_1.Order("2", "Bestellung 2", '7831458', [_this.bsp2, _this.bsp5, _this.bsp5, _this.bsp5, _this.bsp2], 150, _this.cust2),
            new order_model_1.Order("3", "Bestellung 3", '7978178', [_this.bsp2, _this.bsp5, _this.bsp5, _this.bsp5, _this.bsp2], 100, _this.cust3),
            new order_model_1.Order("4", "Bestellung 4", '1354879', [_this.bsp2, _this.bsp5, _this.bsp5, _this.bsp5, _this.bsp2], 50, _this.cust4)
        ];
        _this.getOrders().then(function (o) { return _this.orders.next(o); });
        return _this;
    }
    OrderService.prototype.getOrders = function () {
        return Promise.resolve(this.orderarray);
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
    OrderService.prototype.getOrderbyId = function (orderid) {
        for (var i = 0; i < this.orderarray.length; i++) {
            if (this.orderarray[i].id == orderid.toString())
                return this.orderarray[i];
        }
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
}(order_service_abstract_1.AbstractOrderService));
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map