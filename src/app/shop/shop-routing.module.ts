import { ProductsModule } from './products/products.module';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {ShopComponent} from './shop.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {HomeModule} from './home/home.module';
import {ProductDetailModule} from './products/product-detail/product-detail.module';
import {CartComponent} from './cart/cart.component';
import {CartResolver} from './cart/cart.resolve';
import {CheckoutComponent} from './cart/checkout/checkout.component';
import {ThanksComponent} from './cart/checkout/thanks/thanks.component';
const routes: Routes = [
    {
        path: '', component: ShopComponent, children: [
            {path: '', loadChildren: './home/home.module#HomeModule'},
            // {path: 'cart', component: CartComponent, resolve: {products: CartResolver}},
            {path: 'cart', loadChildren: './cart/cart.module#CartModule', resolve: {products: CartResolver}},
            {path: 'checkout', component: CheckoutComponent, resolve: {products: CartResolver}},
            {path: 'thanks', component: ThanksComponent},
            {path: 'products',  loadChildren: './products/products.module#ProductsModule'},
            {path: 'products/:id', loadChildren: './products/product-detail/product-detail.module#ProductDetailModule'}
        ]
    },
];

export const ShopRoutes = RouterModule.forChild(routes);
