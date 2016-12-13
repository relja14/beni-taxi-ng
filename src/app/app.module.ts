import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactPageComponent } from './main-page/pages/contact/contact-page.component';
import { FaqPageComponent } from './main-page/pages/faq/faq-page.component';
import { OrderPageComponent } from './main-page/pages/order/order-page.component';
import { PricePageComponent } from './main-page/pages/price/price-page.component';
import { TopMenuComponent } from './main-page/rest/top-menu/top-menu.component';
import { ContainerComponent } from './main-page/rest/container/container.component';
import { FormPopupComponent } from './main-page/pages/order/form-popup.component';

const appRoutes: Routes = [
  { path: 'order', component: OrderPageComponent},
  { path: 'price', component: PricePageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'faq', component: FaqPageComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    OrderPageComponent,
    ContactPageComponent,
    PricePageComponent,
    FaqPageComponent,
    ContactPageComponent,
    FaqPageComponent,
    OrderPageComponent,
    PricePageComponent,
    TopMenuComponent,
    ContainerComponent,
    FormPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
