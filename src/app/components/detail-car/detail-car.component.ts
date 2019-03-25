import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {

  @Input('car') car: Car

  constructor() { }

  ngOnInit() {
  }

}
