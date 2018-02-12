import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
    {path: '', loadChildren: './shop/shop.module#ShopModule', pathMatch: 'full'},
    {path: '**', pathMatch: 'full', component: NotFoundComponent},
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
