import { Component, OnInit } from '@angular/core';
import { MunchiesService } from '../../app/munchies.service';
import { HttpClient } from '@angular/common/http';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
 
  id=""
  dp=""
  name=""
  email=""
  phone_number=""
  organization_name=""
  employee_no=""
  gender=""

  constructor(private OMService: MunchiesService,private http: HttpClient, public  router:  Router) {
    var obj=JSON.parse(localStorage.getItem("signup_body"))
    this.id=obj["office_id"]
    this.dp=obj["profile_picture"]
    this.email=obj["email"]
    this.phone_number=obj["phone_no"]
    this.employee_no=obj["emp_no"]
    this.organization_name=obj["organization_name"]
    this.name=obj["full_name"]
    this.gender=obj["gender"]
   }

  ngOnInit(): void {
  }

  sign_up()
  {
    var obj=JSON.parse(localStorage.getItem("signup_body"))

    this.OMService.signup(obj).subscribe(data =>{
      console.log(data["message"])
      if(data["message"] == "saved")
      {
        localStorage.setItem('userID', data["userID"]);
        localStorage.setItem('loginStatus', "true");
        alert("Welcome to Office Munchies!")
        this.router.navigate(['/order']);

      }
    })
  }
}
