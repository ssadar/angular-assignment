import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderHistoryService } from './order-history.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatSliderModule
  ],
  providers: [OrderHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
