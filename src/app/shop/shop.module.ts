import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ShopRoutes} from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from './header/header.component';
import { HomeService } from '../shared/services/home.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
// import { CartComponent } from './cart/cart.component';
// import { StorageService } from '../shared/services/storage.service';
// import { CartResolver } from './cart/cart.resolve';
// import { CheckoutComponent } from './cart/checkout/checkout.component';
// // import { NgFlashMessagesModule } from 'ng-flash-messages';
// import { ThanksComponent } from './cart/checkout/thanks/thanks.component';

@NgModule({
    imports: [
        CommonModule,
        ShopRoutes,
        FormsModule,
        ReactiveFormsModule,
        // NgFlashMessagesModule
    ],
    declarations: [
        HomeComponent,
        ShopComponent,
        HeaderComponent,
        ProductDetailComponent,
        // CartComponent,
        // CheckoutComponent,
        // ThanksComponent
    ]
    // providers: [HomeService, StorageService, CartResolver],
})
export class ShopModule {
}
