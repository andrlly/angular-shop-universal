import { AppStorage } from './../../forStorage/universal.inject';
import { TransferHttp } from './../../modules/transfer-http/transfer-http';
import { Component, OnInit, Inject } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
  styleUrls: ['./transfer-back.component.scss']
})
export class TransferBackComponent implements OnInit {
  result: any;
  resultPost: any;
  constructor(
    private http: TransferHttp,
    private productsService: ProductsService,
    @Inject(AppStorage) private appStorage: Storage,
    @Inject('ORIGIN_URL') public baseUrl: string
  ) {
    console.log(`ORIGIN_URL=${baseUrl}`);
  }

  ngOnInit() {
    this.http.get('http://news.hbmdev.com/products').subscribe(result => {
      // this.result = result;
    });
    this.productsService.getProducts()
            .subscribe((products: Product[]) => {
                console.log(products);
                this.result = products;
            });
    this.http.post('https://reqres.in/api/users', JSON.stringify({
      'name': 'morpheus',
      'job': 'leader'
    })).subscribe(result => {
      this.resultPost = result;
    });
  }

}
