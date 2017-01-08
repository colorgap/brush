import { Component, OnInit } from '@angular/core';
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
  constructor(private api : ApiService){
    this.username = '';
    this.password = '';
  }
  ngOnInit() {
  }
  submit(){
    this.api.validateLogin(this.username,this.password).subscribe(
                       user => {console.log(user)},
                       error =>  {});
  }

}
