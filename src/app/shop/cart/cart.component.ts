import {Component, Inject, OnInit} from '@angular/core';

import 'rxjs/add/operator/map';
import { StorageService } from '../../shared/services/storage.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import {AppStorage} from '../../../forStorage/universal.inject';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    products = [];
    productsCart;
    isEmptyCart: boolean;

    constructor(private storageService: StorageService,
                private route: ActivatedRoute,
                private router: Router,
                @Inject(AppStorage) private appStorage: Storage,
    ) {
    }

    ngOnInit() {
        this.appStorage.removeItem('checkout');
        this.route.data
            .subscribe((data: Data) => {
                this.isEmptyCart = data.products[0] ? false : true;
                    this.products = this.cart.sort((a, b) => {
                        +a.id > +b.id ? 1 : -1;
                    });
                    this.productsCart = data.products.map((p, i) => {
                        return {
                            ...p,
                            ...this.products[i]
                        };
                    });
                }
            );
    }

    get cart() {
        return JSON.parse(this.appStorage.getItem('cart')) || [];
    }

    get total() {
        return this.productsCart.reduce((prev, next) => {
            return prev + (next.count * next.price);
        }, 0);
    }

    goToCheckout() {
        this.appStorage.setItem('checkout', JSON.stringify(this.productsCart));
        this.router.navigate(['/checkout']);

    }

    remove(id) {
        const removeIndex = this.productsCart.map(item => {
            return item.id;
        }).indexOf(id);
        this.storageService.removeProduct(id);
        this.productsCart.splice(removeIndex, 1);
    }

}
