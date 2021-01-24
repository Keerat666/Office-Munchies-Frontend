import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  login_status=false;

  constructor() { 

    if(localStorage.getItem("loginStatus")=="true")
      this.login_status=true;
  }

  ngOnInit() {}

}
