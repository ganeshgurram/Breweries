import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isValidEmail: RegExpMatchArray | null | undefined;
  GoogleRecaptchaSiteKey: any;
  captchaResponse: any;
  captchaResolved = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signupservice: UserService,
  ) {}

  signin: User = {

    Password: '',
    PhoneNumber: '',
    UserName :'',
    Name:''
  };
  clicked: boolean = false;

  ngOnInit(): void
  {

  }

  onSignupClick() {
    this.clicked = true;
    this.isValidEmail = this.signin.UserName.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (
      this.signin.UserName !== '' &&
      this.isValidEmail &&
      this.signin.Password !== '' &&
      this.signin.PhoneNumber !== '' &&
      this.signin.Name !== ''
    ) {

      this.signupservice.Signup(this.signin).subscribe({
        next: (response: any) => {
        alert('Account created successfully');
        this.onLoginClick();
      },
        error: (error) => {
          console.log(error.error.errors[0].message);
          alert('Account creation failed');
        },
       } );

     
    }
  }

  onLoginClick() {
    this.router.navigate(['login']);
  }


}