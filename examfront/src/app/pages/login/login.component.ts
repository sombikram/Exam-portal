import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  }

  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }


  formSubmit() {
    console.log("login button clicked");

    if (this.loginData.username.trim() == "" || this.loginData.username == null) {
      this.snack.open("Username is required !!", '', {
        duration: 3000,
      });
    }


    if (this.loginData.password.trim() == "" || this.loginData.password == null) {
      this.snack.open("Password is required !!", '', {
        duration: 3000,
      });
    }


    // request to server to generate tokens
    this.loginService.generateToken(this.loginData).subscribe((data: any) => {
      console.log("success");
      console.log(data);


      //login .....
      this.loginService.loginUser(data.token);

      this.loginService.getCurrentUser().subscribe((
        (user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          //redirect ......ADMIN-dashboard
          //redirect -------USER-dashboard
          if(this.loginService.getUserRole() == 'ADMIN') {

            //admin dashboard
            //window.location.href="/admin";
            this.router.navigate(['/admin']);

          }else if(this.loginService.getUserRole() == 'USER'){

              //user dashboard
             // window.location.href="/user";
             this.router.navigate(['/user/0']);

          }else {this.loginService.logOut();}

        }
      ))

    },
      (error) => {
        console.log("error in login");
        console.log(error);
        this.snack.open("Invalid Details! Try again", '', {duration: 3000});
      }
    );

  }

}
