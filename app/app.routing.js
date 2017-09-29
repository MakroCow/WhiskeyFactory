"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var order_overview_component_1 = require("./order-overview/order-overview.component");
var help_component_1 = require("./help/help.component");
var appRoutes = [
    {
        path: '',
        redirectTo: 'page1',
        pathMatch: 'full'
    },
    {
        path: 'orders',
        component: order_overview_component_1.OrderOverviewComponent
    },
    {
        path: 'help',
        component: help_component_1.HelpComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map