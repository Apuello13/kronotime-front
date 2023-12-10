import {CartItem} from './cart-item';

export interface Cart {
    id: number;
    items: CartItem[];
    total: number;
}
