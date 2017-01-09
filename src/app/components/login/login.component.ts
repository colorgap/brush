import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService] 
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private api : ApiService,private router:Router){
    this.username = '';
    this.password = '';
  }
  ngOnInit() {
  }
  submit(){
    this.api.validateLogin(this.username,this.password).subscribe(
      user => {
        if(user.user_id){
          this.router.navigate(['dashboard']);
        }
      },
      error =>  {});
  }

}
