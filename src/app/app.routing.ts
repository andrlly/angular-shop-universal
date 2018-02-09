import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
// import {TransferBackComponent} from './transfer-back/transfer-back.component';
// import {HomeComponent} from './home/home.component';
// import {MockServerBrowserComponent} from './mock-server-browser/mock-server-browser.component';
import {ShopModule} from './shop/shop.module';
import { TransferBackComponent } from './transfer-back/transfer-back.component';

const routes: Routes = [
    {path: '', loadChildren: './shop/shop.module#ShopModule', pathMatch: 'full'},
    // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
