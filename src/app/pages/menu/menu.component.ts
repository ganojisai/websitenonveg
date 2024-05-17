import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private od:OrderdetailsService){}

  fooddata:any

  ngOnInit(): void {
    this.fooddata=this.od.meals
  }

}
