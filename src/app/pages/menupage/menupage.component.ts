import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private od:OrderdetailsService, private ar:ActivatedRoute){}

  mydata:any
  getdata:any

ngOnInit(): void {
  this.mydata=this.ar.snapshot.paramMap.get('id');
  console.log(this.mydata)
  if(this.mydata){
    this.getdata=this.od.meals.filter(res=>{
      return res.id==this.mydata
    })
  }
}
}
