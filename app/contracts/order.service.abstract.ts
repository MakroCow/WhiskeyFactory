import {Injectable} from "@angular/core";
import {Order} from "../order-overview/order.model";

@Injectable()
export abstract class AbstractOrderService {

     public abstract getOrders(): Promise<Order[]>;

}