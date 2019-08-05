import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
// import { LuxuryComponent } from './lazymodule/luxury/luxury.component';
// import { ShippingComponent } from './shipping/shipping.component';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ShippingModule } from './shipping/shipping.module';

export function shippingModuleLoader() {
  return ShippingModule;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, ShippingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'shipping', loadChildren: shippingModuleLoader},
      {path: 'luxury', loadChildren: './lazymodule/luxury.module#LuxuryModule'}
    ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
