import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService] 
})
export class AppComponent {
  username:string;
  password:string;
  constructor(private appService : AppService){
    this.username = '';
    this.password = '';
  }
  submit(){
    console.log(this.username,this.password);
    this.appService.validateLogin(this.username,this.password).subscribe(
                       user => {console.log(user)},
                       error =>  {});
  }
}
