import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { DataCarService } from '../../services/data-car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  cars: Car[]

  constructor(
    private dataCarService: DataCarService
  ) {}

  ngOnInit() {
    this.cars = this.dataCarService.getCars();    
  }
}