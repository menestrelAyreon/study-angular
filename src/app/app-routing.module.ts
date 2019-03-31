import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCarsComponent } from './components/list-cars/list-cars.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

const routes: Routes = [
  { path: 'list', component: ListCarsComponent },
  { path: 'car/:id', component: DetailPageComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
