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
        this.bsp1 = new order_model_1.Whisky("test1", 4535, [0, 1, 5, 3, 4]);
        this.bsp2 = new order_model_1.Whisky("test2", 587, [0, 1, 5, 3, 4]);
        this.bsp3 = new order_model_1.Whisky("test3", 8794, [0, 2, 4, 8, 9]);
        this.bsp4 = new order_model_1.Whisky("test4", 1357, [0, 1, 5, 3, 4]);
        this.bsp5 = new order_model_1.Whisky("test5", 9832, [5, 0, 0, 0, 1]);
        this.getOrders().then(function (o) { return _this.orders.next(o); });
    }
    OrderService.prototype.getOrders = function () {
        return Promise.resolve([
            new order_model_1.Order("1", "Bestellung 1", '0121345', new order_model_1.Pos(this.bsp1, this.bsp3, this.bsp2, this.bsp5, this.bsp2), 200),
            new order_model_1.Order("2", "Bestellung 2", '7831458', new order_model_1.Pos(this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2), 150),
            new order_model_1.Order("3", "Bestellung 3", '7978178', new order_model_1.Pos(this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2), 100),
            new order_model_1.Order("4", "Bestellung 4", '1354879', new order_model_1.Pos(this.bsp2, this.bsp5, this.bsp5, this.bsp5, this.bsp2), 50)
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