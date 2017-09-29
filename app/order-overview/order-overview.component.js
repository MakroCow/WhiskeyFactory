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
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var OrderOverviewComponent = /** @class */ (function () {
    function OrderOverviewComponent(orderService) {
        var _this = this;
        this.orderService = orderService;
        orderService.orders.subscribe(function (allOrders) {
            _this.orders = allOrders;
            _this.selectedOrder = allOrders[0];
        });
    }
    OrderOverviewComponent.prototype.selectOrder = function (selectedOrder) {
        this.selectedOrder = selectedOrder;
    };
    OrderOverviewComponent = __decorate([
        core_1.Component({
            selector: 'order-overview',
            styleUrls: ['order-overview.css'],
            moduleId: module.id,
            templateUrl: 'order-overview.html'
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], OrderOverviewComponent);
    return OrderOverviewComponent;
}());
exports.OrderOverviewComponent = OrderOverviewComponent;
//# sourceMappingURL=order-overview.component.js.map