import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  cars: Car[]

  constructor() {
    
  }

  ngOnInit() {
    this.cars = [ new Car(1, 'Ferrari')];
    
  }

}
