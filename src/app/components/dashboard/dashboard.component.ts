import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ApiService] 
})
export class DashboardComponent implements OnInit {

  constructor(private api : ApiService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')==null){
      this.router.navigate(['']);
    }
  }
  logout(){
    let logoutConfig = {
      url: 'api/v1/logout',
      method: 'get',
      data:{}
    };
    this.api.executeCall(logoutConfig).subscribe(
      res => {
        localStorage.clear();
        this.router.navigate(['']);
      }
    );
  }

}
