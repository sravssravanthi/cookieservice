import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {LocalStorageService} from 'ngx-localstorage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public loginusername;
public lstorage;
  constructor(private cookie: CookieService, private router: Router,private localstorage:LocalStorageService) {
    if(this.cookie.check('sravs') == false) {
      this.router.navigate(['/']);
    }
    this.loginusername = this.cookie.get('sravs');
    this.lstorage = this.localstorage.get('renuka');
  }
logout(){
  this.cookie.delete('sravs');
  this.router.navigate(['/']);

}
  ngOnInit() {
  }

}
