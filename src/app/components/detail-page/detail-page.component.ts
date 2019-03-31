import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataCarService } from '../../services/data-car.service';
import { Car } from '../../models/car';


@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {


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
