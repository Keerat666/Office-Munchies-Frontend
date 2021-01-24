import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { MunchiesService } from '../../app/munchies.service';
import { HttpClient } from '@angular/common/http';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  email=""
  password=""
  @Output() onLoginChanged = new EventEmitter<any>();
  constructor(private OMService: MunchiesService,private http: HttpClient, public  router:  Router) { }

  ngOnInit() {
   
  }

  login()
  {
    console.log(this.email);

    this.OMService.loginUser(this.email,this.password).subscribe(data =>{
      console.log(data["login"])
      if(data["login"])
      {
        localStorage.setItem('userID', data["_id"]);
        localStorage.setItem('loginStatus', "true");
        this.onLoginChanged.emit(true)
        this.router.navigate(['/order']);

      }
    })
  }

}
