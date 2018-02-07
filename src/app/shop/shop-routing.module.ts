import { ProductsModule } from './products/products.module';
import {HomeComponent} from './home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {ShopComponent} from './shop.component';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: '', component: ShopComponent, children: [
            {path: '', component: HomeComponent},
            // {path: 'cart', component: CartComponent, resolve: {products: CartResolver}},
            // {path: 'checkout', component: CheckoutComponent, resolve: {products: CartResolver}},
            // {path: 'thanks', component: ThanksComponent},
            {path: 'products',  loadChildren: './products/products.module#ProductsModule'},
            {path: 'products/:id', component: ProductDetailComponent}
        ]
    },
];

export const ShopRoutes = RouterModule.forChild(routes);
