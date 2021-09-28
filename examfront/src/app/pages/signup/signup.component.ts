import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService, private snack: MatSnackBar ) { }


  //user variable
  public user={
    userName: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '', 
  };

  ngOnInit(): void {}


formSubmit(){
  
  console.log(this.user);
  if(this.user.userName =="" || this.user.userName == null){
   // alert("Username is required !!")
   this.snack.open("Username is required !!", '', {
     duration: 3000
   });
  }


  else if(this.user.password =="" || this.user.password == null){
    // alert("Username is required !!")
    this.snack.open("Password is required !!", '', {
      duration: 3000
    });
   }


   else if(this.user.firstName =="" || this.user.firstName == null){
    // alert("Username is required !!")
    this.snack.open("First Name is required !!", '', {
      duration: 3000
    });
   }

   else if(this.user.lastName =="" || this.user.lastName == null){
    // alert("Username is required !!")
    this.snack.open("Last Name is required !!", '', {
      duration: 3000
    });
   }


   else if(this.user.email =="" || this.user.email== null){
    // alert("Username is required !!")
    this.snack.open("Email is required !!", '', {
      duration: 3000
    });
   }

  else{
    //addUser: userservice
  this.userService.addUser(this.user).subscribe(
    (data: any)=>{
  
      //success
      console.log(data);
      //alert("success !!");
      Swal.fire("Successfully Registered !!","Your user ID is " + data.id, "success");
    },
    (error)=>{

      //error
      console.log(error);
     // alert("something went wrong !!");

    this.snack.open("Something went wrong !!", "", {duration: 3000});
    }
  )
  }
  

}


}
