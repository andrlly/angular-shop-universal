import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ShopRoutes} from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { HeaderComponent } from './header/header.component';
import { HomeService } from '../shared/services/home.service';
import { StorageService } from '../shared/services/storage.service';
import { CartResolver } from './cart/cart.resolve';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { ThanksComponent } from './cart/checkout/thanks/thanks.component';
import { FlashMessagesModule } from "ngx-flash-messages";

@NgModule({
    imports: [
        CommonModule,
        ShopRoutes,
        FormsModule,
        ReactiveFormsModule,
        FlashMessagesModule
    ],
    declarations: [
        ShopComponent,
        HeaderComponent,
        CheckoutComponent,
        ThanksComponent
    ],
    providers: [HomeService, StorageService, CartResolver],
})
export class ShopModule {
}
