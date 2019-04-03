import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarsComponent } from './list-cars/list-cars.component';
import { DetailCarComponent } from './detail-car/detail-car.component'

const routes: Routes = [
  { path: 'list', component: ListCarsComponent },
  { path: 'car/:id', component: DetailCarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
