import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataCarService } from '../data-car.service';
import { Car } from '../car';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent implements OnInit {


  car?: Car;  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataCarService: DataCarService
  ) {}

  ngOnInit() {
    this.getCar();
  }

  getCar() {
    let id = this.route.snapshot.paramMap.get('id');
    if (/^([0-9])+$/.test(id)) {
      this.car = this.dataCarService.getCar(Number.parseInt(id));
    }    
  }
}
