import { Component, OnInit } from '@angular/core';
import { MunchiesService } from '../../app/munchies.service';
import { HttpClient } from '@angular/common/http';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
items:any
cart:any
cart_value=0
quantity:any=[]

  constructor(private OMService: MunchiesService,private http: HttpClient, public  router:  Router) { 

this.fetch_foods()

  }

  ngOnInit(): void {
    
  }

  fetch_foods()
  {
    this.OMService.fetch_menu().subscribe(data =>{
      console.log(data)
      this.items=data

      for(var x in this.items)
      {
        this.quantity[x]=1
      }

    })
  }

  add(index)
  {
    console.log(index)
    this.items[index].cartStatus=true
    this.items[index].quantity=this.quantity[index]
    console.log(this.items[index])
    this.cart_value+=this.items[index].item_price * parseInt(this.quantity[index])
  }

  remove(index)
  {
    console.log(index)
    this.items[index].cartStatus=false
    console.log(this.items[index])
    this.cart_value-=this.items[index].item_price*parseInt(this.quantity[index])
    this.quantity[index]=1

  }

  checkout()
  {
    var cart=[];

    for(var x in this.items)
    {
      if(this.items[x].cartStatus)
      {
        cart.push(this.items[x])
      }
    }
    var obj={
      "order" : cart,
      "total" : this.cart_value

    }
    console.log(obj)

    localStorage.setItem("cart" , JSON.stringify(obj))
    this.router.navigate(['/checkout']);

  }
  

}
