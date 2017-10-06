import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { OrderService } from './order-overview/order.service';

declare function showLegalAgeCheck();

@Component({
    selector: 'seed-app',
    templateUrl: 'app.html',
    styleUrls: ['app.css'],
    moduleId: module.id,
    providers: [
        OrderService] // du solltest hier den AbstractService benutzen
})


export class AppComponent {
}

