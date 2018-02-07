import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ProductsRoutes
    ],
    declarations: [
        ProductsComponent,
    ]
    // providers: [HomeService, StorageService, CartResolver],
})
export class ProductsModule {
}
