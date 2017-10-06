import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { HelpComponent } from './help/help.component';


import { routing } from './app.routing';
import {BestelldetailComponent} from "./bestelldetail/bestelldetail.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        OrderOverviewComponent,
        HelpComponent,
        BestelldetailComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

