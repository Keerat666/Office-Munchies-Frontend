import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [LoginComponent]
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    showGuest=true;
    showUser=false;
    constructor(public location: Location, private router: Router, private authenticationService: LoginComponent) {
        authenticationService.onLoginChanged.subscribe(name=>{
            console.log("Emit : "+name)
            this.showGuest=false;
           this.showUser=true;
        })
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }

     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });

     var loginStatus:String=localStorage.getItem('loginStatus');
     console.log("Inside Navbar")
     if(loginStatus=="true")
     {
        this.showGuest=false;
        this.showUser=true;
     }
    }

    ngOnChanges()
    {
        var loginStatus:String=localStorage.getItem('loginStatus');
        console.log("Inside Navbar")
        if(loginStatus=="true")
        {
           this.showGuest=false;
           this.showUser=true;
        }
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    signout()
    {
        localStorage.removeItem('loginStatus');
        localStorage.removeItem('userID');
        this.showGuest=true;
        this.showUser=false;
        this.router.navigate(['/landing']);


    }

    doSomething()
    {
        console.log("Hello emitter")
        this.showGuest=false;
        this.showUser=true;
    }
}
