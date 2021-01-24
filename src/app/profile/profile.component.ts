import { Component, OnInit } from '@angular/core';
import { MunchiesService } from '../../app/munchies.service';
import { HttpClient } from '@angular/common/http';
import { Router } from  "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    name=""
    email=""
    phone_no=""
    profile_picture=""
    gender=""
    member_since=""
    organization_name=""
    office_id=""

    constructor(private OMService: MunchiesService,private http: HttpClient, public  router:  Router) { 

        this.fetchProfile()


    }

    ngOnInit() {

    }

    fetchProfile()
  {

    this.OMService.fetch_profile(localStorage.getItem('userID')).subscribe(data =>{
      console.log(data)
     this.name=data["full_name"]
     this.email=data["email"]
     this.phone_no=data["phone_no"]
     this.organization_name=data["organization_name"]
     this.member_since=data["id_created_at"]
     this.profile_picture=data["profile_picture"]
     this.gender=data["gender"]
     this.office_id=data["office_id"]
    
    })
  }


  openID()
  {
    window.open(this.office_id, "_blank");
  }

}
