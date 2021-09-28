import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user = null;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {

    //accessing data from the local storage
    this.user = this.loginService.getUser();
  

    //////////   accessing data from the server    //////////

    // this.loginService.getCurrentUser().subscribe(
    //   (user:any)=>{
    //     this.user = user;
    //   },
    //   (error)=>{
    //     alert("error");
    //   }
    // )

  }

}
