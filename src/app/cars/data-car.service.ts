import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class DataCarService {

  private cars: Car[]

  constructor() { 
    this.cars = [
      new Car(1, 'Ferrari'),
      new Car(2, 'Volks'),
      new Car(3, 'Tesla'),
      new Car(4, 'Nissan'),
      new Car(5, 'Renault'),
      new Car(6, 'Peugeot'),
      new Car(7, 'Toyota'),
      new Car(8, 'Audi'),
    ];
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: number): Car {
    //let car = this.cars.find( (value: Car) => value.id === id? true: false );
    //console.log(car);
    return this.cars.find( (value: Car) => value.id === id? true: false );
  }
}
