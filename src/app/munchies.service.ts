import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from  "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MunchiesService {
  base_url="https://office-munchies-backend.herokuapp.com/api/v1"

  constructor(private http: HttpClient, public  router:  Router) { }

  fetch_profile(id)
  {
    return this.http.get(this.base_url+'/users/UserByID?_id='+id);
  }

  loginUser(email, password)
                {
                  console.log("Hello from service")
                  var obj={
                    "email": email,
                    "password" :password
                  }
                  return this.http.post(this.base_url+'/users/login', obj)
                }


  signup(obj)
                {
                  console.log("Hello from service")
               
                  return this.http.post(this.base_url+'/users/saveUser', obj)
                }

                fetch_menu()
                {
                  return this.http.get(this.base_url+'/food_items/allFoods');
                }

                placeOrder(obj)
                {
                  console.log("Hello from service")
               
                  return this.http.post(this.base_url+'/users/order', obj)
                }

}
