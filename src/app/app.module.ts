import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './template/home/home.component';
import { Home1Component } from './template/home1/home1.component';
import { Home2Component } from './template/home2/home2.component';
import { CarComponent } from './component/car/car.component';
import { BusComponent } from './component/bus/bus.component';
import { TruckComponent } from './component/truck/truck.component';
import { BikeComponent } from './component/bike/bike.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    CarComponent,
    BusComponent,
    TruckComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
