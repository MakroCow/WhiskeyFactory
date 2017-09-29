import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { HelpComponent } from './help/help.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'page1',
        pathMatch: 'full'
    },
    {
        path: 'orders',
        component: OrderOverviewComponent
    },
    {
        path: 'help',
        component: HelpComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);