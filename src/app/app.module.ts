import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MetaModule, MetaSettings } from '@ngx-meta/core';
import { MetaLoader } from '@ngx-meta/core';
import { MetaStaticLoader } from '@ngx-meta/core';
import { PageTitlePositioning } from '@ngx-meta/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlashMessagesModule } from "ngx-flash-messages";
import {ShopModule} from './shop/shop.module';
import {ApiService} from './shared/services/api.service';
import {ProductsService} from './shared/services/products.service';
import {AdminModule} from './admin/admin.module';
import {AuthGuard} from './admin/auth/auth.guard';
import {CategoriesService} from './shared/services/categories.service';
import {OrdersService} from './shared/services/order.service';
import {SharedModule} from './shared/shared.module';

export function metaFactory(): MetaLoader {
  const setting: MetaSettings = {
    callback: (key: string) => key,
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' | ',
    applicationName: 'App Universal',
    // applicationUrl: 'https://gorniv.com/',
    defaults: {
      title: 'default page title',
      description: 'default description',
      'og:site_name': 'App site Universal',
      'og:type': 'website',
      'og:locale': 'ru_RU',
      'og:locale:alternate': 'en_GB'
    }
  };
  return new MetaStaticLoader(setting);
}

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    RouterModule,
    AppRoutes,
    AdminModule,
    SharedModule,
    ShopModule,
    FlashMessagesModule,
    TransferHttpModule,
    BrowserAnimationsModule,
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: []
    }),
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [CookieService, ApiService, AuthGuard, ProductsService, CategoriesService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
