import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlashMessagesModule } from "ngx-flash-messages";

const routes: Routes = [
    {path: '', component: ProductDetailComponent},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlashMessagesModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProductDetailComponent
    ],
    providers: []
})
export class ProductDetailModule {
}