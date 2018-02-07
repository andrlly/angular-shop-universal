import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {  path: '', component: ProductsComponent},
];

export const ProductsRoutes = RouterModule.forChild(routes);
