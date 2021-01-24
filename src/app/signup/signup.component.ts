import { Component, OnInit } from '@angular/core';
import { MunchiesService } from '../../app/munchies.service';
import { HttpClient } from '@angular/common/http';
import { Router } from  "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    selectedFile: File

    id=""
    dp=""
    name=""
    email=""
    phone_number=""
    password=""
    organization_name=""
    employee_no=""
    male=false;
    female=false;

    constructor(private OMService: MunchiesService,private http: HttpClient, public  router:  Router) { }

    ngOnInit() {}

    onFileChanged(event) {
        this.selectedFile = event.target.files[0]
        console.log("DP")
        const uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('https://office-munchies-backend.herokuapp.com/api/v1/users/upload_photo', uploadData)
          .subscribe(data => {
            console.log(data["url"])
            this.dp=data["url"]
            alert("DP saved")
          });

      }

      onFileChanged2(event) {
        this.selectedFile = event.target.files[0]
        console.log("ID")
        const uploadData = new FormData();
        uploadData.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post('https://office-munchies-backend.herokuapp.com/api/v1/users/upload_photo', uploadData)
          .subscribe(data => {
            console.log(data["url"])
            this.id=data["url"]

            alert("ID saved")
          });
      }
    
      male_radio()
      {
          this.male=!this.male
          if(this.male)
          this.female=false
          console.log("Male"+this.male)
          console.log("Female"+this.female)
      }

      female_radio()
      {
   
          this.female=!this.female
          if(this.female)
            this.male=false
          console.log("Female"+this.female)
          console.log("Male"+this.male)

      }

      sign_up()
      {
        if(this.id=="")
        {
            alert("Please upload ID")

        }

        else if(this.dp=="")
        {
            alert("Please upload DP")

        }
        else if(this.name=="")
        {
            alert("Please enter you name ")

        }
        else if(this.email=="")
        {
            alert("Please enter email")
        }
        else if (1!=1)
        {
            //check for valid email
        }
        

        else if(this.password=="")
        {
            alert("Please enter password")

        }
        else if(this.password.length <=5)
        {
            alert("Password cannot be less that 5 characters")
        }
        else if(this.phone_number.length !=10)
        {
            alert("Phone number can have only 10 characters")
        }

        else if(this.phone_number=="")
        {
            alert("Please enter phone number")

        }

        else if(this.organization_name=="")
        {
            alert("Please enter organization name")

        }

        else if(this.employee_no=="")
        {
            alert("Please enter employee number")

        }
        else
        {
            //save everything to localstorage and move to next component
            var gender=""
            if(this.male)
                gender="Male"
            else
                gender="Female"

           var body= {
                "full_name": this.name,
                "email" :this.email,
                "phone_no" :this.phone_number,
                "password" : this.password,
                "emp_no" : this.employee_no,
                "organization_name" : this.organization_name,
                "office_id" : this.id,
                "profile_picture" : this.dp,
                "gender" : gender

              }

              localStorage.setItem("signup_body" , JSON.stringify(body))
              this.router.navigate(['/preview']);


        }

      }


}
