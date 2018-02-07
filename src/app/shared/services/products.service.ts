import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { ApiService } from "./api.service";
import { Product } from "../models/product.model";

@Injectable()
export class ProductsService {

    constructor(private api: ApiService) {
    }

    getProducts(): Observable<Product[]> {
        return this.api.get('products');
    }

    getProductById(id: number): Observable<Product> {
        return this.api.get(`products/${id}`);
    }

    getProductByIds(ids) {
        return this.api.post(`productsArr`, {ids: ids});
    }

    addProduct(body): Observable<Product> {
        return this.api.post(`product/add`, body);
    }

    editProduct(id, body): Observable<Product> {
        return this.api.post(`product/edit/${id}`, body);
    }

    deleteProduct(id): Observable<Product> {
        return this.api.get(`product/delete/${id}`);
    }
}