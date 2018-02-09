import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {AppStorage} from '../../../../../forStorage/universal.inject';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit, OnDestroy {

  info = [];
  order_date;

  constructor(@Inject(AppStorage) private appStorage: Storage) {
    this.order_date = new Date();
  }

  ngOnInit() {
       JSON.parse(this.appStorage.getItem('checkout')).map(info => {
         this.info.push(info);
       });

      this.appStorage.removeItem('cart');
      this.appStorage.removeItem('checkout');
  }

    get total() {
        return this.info.reduce((prev, next) => {
            return prev + (next.count * next.price);
        }, 0);
    }

    ngOnDestroy() {

    }

}
