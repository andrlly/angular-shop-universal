import {Routes, RouterModule} from '@angular/router';
import {ShopComponent} from './shop.component';
import {CartResolver} from './cart/cart.resolve';
import {CheckoutComponent} from './cart/checkout/checkout.component';
import {ThanksComponent} from './cart/checkout/thanks/thanks.component';

const routes: Routes = [
    {
        path: '', component: ShopComponent, children: [
            {path: '', loadChildren: './home/home.module#HomeModule'},
            {path: 'cart', loadChildren: './cart/cart.module#CartModule', resolve: {products: CartResolver}},
            {path: 'checkout', component: CheckoutComponent, resolve: {products: CartResolver}},
            {path: 'thanks', component: ThanksComponent},
            {path: 'products',  loadChildren: './products/products.module#ProductsModule'},
            {path: 'products/:id', loadChildren: './products/product-detail/product-detail.module#ProductDetailModule'}
        ]
    }
];

export const ShopRoutes = RouterModule.forChild(routes);
