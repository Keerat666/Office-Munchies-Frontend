import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  total;
  time;
  constructor() { 

    this.total=localStorage.getItem("total")
    this.time=localStorage.getItem("time")
  }


  ngOnInit(): void {
  }

}
