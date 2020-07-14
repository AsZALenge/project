import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RegisUserComponent } from './regis-user/regis-user.component';
import { RegisOwnerComponent } from './regis-owner/regis-owner.component';
import { ListDataComponent } from './user/list-data/list-data.component';
import { MyServiceService } from './shared/service/my-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeAllComponent } from './home-all/home-all.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    RegisUserComponent,
    RegisOwnerComponent,
    ListDataComponent,
    HomeAllComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([
    //   { path: '', redirectTo: '/home', pathMatch: 'full' },
    //   { path: 'homeall', component: HomeAllComponent },
    //   { path: 'home', component: HomeComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent },
    //   { path: 'regisUser', component: RegisUserComponent },
    //   { path: 'regisOwner', component: RegisOwnerComponent },
    //   { path: 'userList', component: ListDataComponent },
    // ]),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
