import {Component, Inject, OnInit} from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {Product} from '../../shared/models/product.model';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: Product[] = [];

    constructor(private productsService: ProductsService,
                @Inject('ORIGIN_URL') public baseUrl: string) {
    }

    ngOnInit() {
        this.productsService.getProducts()
            .subscribe((products: Product[]) => {
                this.products = products;
            });
    }


}
