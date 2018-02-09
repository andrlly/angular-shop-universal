import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsComponent} from './products.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', component: ProductsComponent},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProductsComponent,
    ],
    providers: []
})
export class ProductsModule {
}
