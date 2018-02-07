import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
// import {TransferBackComponent} from './transfer-back/transfer-back.component';
// import {HomeComponent} from './home/home.component';
// import {MockServerBrowserComponent} from './mock-server-browser/mock-server-browser.component';
import {ShopModule} from './shop/shop.module';
import { TransferBackComponent } from './transfer-back/transfer-back.component';

const routes: Routes = [
    {path: 'shop', loadChildren: './shop/shop.module#ShopModule', pathMatch: 'full',
        data: {
            // for override default meta
            meta: {
                title: 'home title',
                override: true,
                description: 'home description'
            }
        },
        canActivateChild: [MetaGuard],
    },
    {path: 'back', loadChildren: './transfer-back/transfer-back.module#TransferBackModule',
    data: {
        // for override default meta
        meta: {
            title: 'home title',
            override: true,
            description: 'home description'
        }
    },
    canActivateChild: [MetaGuard]
},
    // {path: 'products', loadChildren: './shop/products/products.module#ProductsModule'},
  // {
  //   path: '', component: HomeComponent, pathMatch: 'full',
  //   data: {
  //     // for override default meta
  //     meta: {
  //       title: 'home title',
  //       override: true,
  //       description: 'home description'
  //     }
  //   },
  //   // need for default meta
  //   canActivateChild: [MetaGuard],
  // },
  // without meta
  // { path: 'mock', loadChildren: './mock-server-browser/mock-server-browser.module#MockServerBrowserModule' },
  // { path: 'mock', component: MockServerBrowserComponent },
  // with meta
//   { path: 'back', component: TransferBackComponent},
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
