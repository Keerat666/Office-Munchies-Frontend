import { Component, OnInit } from '@angular/core';
import { MunchiesService } from '../../app/munchies.service';
import { HttpClient } from '@angular/common/http';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order:any
  total=0;
  time="3:30pm"
  date;
  cash=false
  card=false

  constructor(private OMService: MunchiesService,private http: HttpClient, public  router:  Router) {

    var obj=JSON.parse(localStorage.getItem("cart"))
    this.total=obj["total"]
    this.order=obj["order"]
   }

  ngOnInit(): void {
  }


  cash_radio()
  {
      this.cash=!this.cash
      if(this.cash)
      this.card=false
      console.log("Cash"+this.cash)
      console.log("Card"+this.card)
  }

  card_radio()
  {

      this.card=!this.card
      if(this.card)
        this.cash=false
      console.log("Card"+this.card)
      console.log("Cash"+this.cash)

  }

  checkout()
  {
    var pm;

    if(this.cash)
      pm="Cash"
    else
      pm="Card"

    var obj={
      "order" : this.order,
      "total" : this.total,
      "payment_mode" : pm,
      "date" : this.date["day"]+"/"+this.date["month"]+"/"+this.date["year"],
      "time" : this.time,
      "userID" : localStorage.getItem("userID")
    }

    console.log(obj);

    localStorage.setItem("total", this.total+"")
    localStorage.setItem("time", this.time+"")

    this.OMService.placeOrder(obj).subscribe(data =>{
      console.log(data)
      if(data["order"]=="saved")
      this.router.navigate(["/success"])

    })

  }

}
