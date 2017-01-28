import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService] 
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private login : LoginService,private router:Router){
    this.username = '';
    this.password = '';
  }
  ngOnInit() {
  }
  submit(){
    this.login.validateLogin(this.username,this.password).subscribe(
      user => {
        if(user.user_id){
          localStorage.setItem('user',JSON.stringify(user));
          this.router.navigate(['dashboard']);
        }
      },
      error =>  {});
  }

}
