import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResetpasswordComponent } from './components/dashboard/resetpassword/resetpassword.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { UserManagementComponent } from './components/dashboard/user-management/user-management.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { ConfigComponent } from './components/dashboard/config/config.component';
import { RolesComponent } from './components/dashboard/config/roles/roles.component';
import { HealthCheckComponent } from './components/dashboard/health-check/health-check.component';
import { ConfigMainComponent } from './components/dashboard/config/config-main/config-main.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: LoginComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: '', component: MainComponent },
      { path: 'usermanagement', component: UserManagementComponent },
      { path: 'config', component: ConfigComponent,
        children:[
            {path: '', component: ConfigMainComponent },
            {path: 'roles', component: RolesComponent }
          ]
      },
      { path: 'healthcheck', component: HealthCheckComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'resetpassword', component: ResetpasswordComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ResetpasswordComponent,
    ProfileComponent,
    UserManagementComponent,
    MainComponent,
    ConfigComponent,
    RolesComponent,
    HealthCheckComponent,
    ConfigMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
