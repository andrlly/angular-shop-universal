import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ShopRoutes} from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from './header/header.component';
import { HomeService } from '../shared/services/home.service';
// import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { StorageService } from '../shared/services/storage.service';
import {ProductsModule} from './products/products.module';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {environment} from '../../environments/environment';
import {MockBrowserModule} from '../__mock-server-browser/mock-browser/mock-browser.module';
import {MockServerModule} from '../__mock-server-browser/mock-server/mock-server.module';
import { CartResolver } from './cart/cart.resolve';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { ThanksComponent } from './cart/checkout/thanks/thanks.component';

@NgModule({
    imports: [
        CommonModule,
        ShopRoutes,
        FormsModule,
        ReactiveFormsModule,
        // NgFlashMessagesModule
    ],
    declarations: [
        ShopComponent,
        HeaderComponent,
        // CartComponent,
        CheckoutComponent,
        ThanksComponent
    ],
    providers: [HomeService, StorageService,
        CartResolver
    ],
})
export class ShopModule {
}
