import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {NgxLocalStorageModule} from 'ngx-localstorage';
const routing: Routes = [
  {path: '', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent}]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routing), NgxLocalStorageModule.forRoot()

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
