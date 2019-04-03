import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { DetailCarComponent } from './detail-car/detail-car.component';

@NgModule({
  declarations: [
    ListCarsComponent,
    DetailCarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
