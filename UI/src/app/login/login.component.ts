import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Login } from '../models/Login';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    clicked: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}
  loginObj: Login = {

    UserName: '',
    Password: '',

  };
  name!: string;
  logid: number = 2;
  ngOnInit(): void {}

  onLoginClick1() {
    
    this.clicked = true;

      this.userService.Loginrec(this.loginObj).subscribe({
       next: (response :any) => {
         // console.log(response);
          localStorage.setItem('ss_User', response);
          console.log(localStorage.getItem('ss_User'));
          this.router.navigate(['search']);
        
        },
        error:(error) => {
          
         // alert("Hello");
console.log(error);
        }
      }
      );
    }
    
  



  getUserDetails() {
   /* 
    this.userService.getUserDetails().subscribe(
      (response: User) => {
      
        localStorage.setItem('userDetails', JSON.stringify(response));
        this.router.navigate(['outplay/email-validator/manual']);
      },
      (error) => {
    
        console.log(error);
      }
    );

    */
  }
  onSignClick() {
    this.router.navigate(['signup']);
  }

}
