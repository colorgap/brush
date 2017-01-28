import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  providers: [ApiService]
})
export class UserManagementComponent implements OnInit {
  users: any;
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    let userConfig = {
      url: 'api/v1/admin/users',
      method: 'get',
      data: {}
    };
    this.api.executeCall(userConfig).subscribe(
      users => {
        this.users = users;
      }
    );
  }

}
