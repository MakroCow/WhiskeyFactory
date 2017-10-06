import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { HelpComponent } from './help/help.component';
import {BestelldetailComponent} from "./bestelldetail/bestelldetail.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'orders',
        pathMatch: 'full'
    },
    {
        path: 'orders',
        component: OrderOverviewComponent
    },
    {
        path: 'bestelldetail/:orderid',
        component: BestelldetailComponent
    },
    {
        path: 'help',
        component: HelpComponent
    }
    ,
    {
        path: '**',
        component: OrderOverviewComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);