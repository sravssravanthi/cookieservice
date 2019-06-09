import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {LocalStorageService} from 'ngx-localstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder , private rout: Router,private cookie: CookieService , private localstorage: LocalStorageService) { }
  public logindata: FormGroup;
   public name='srinivas';
  login() {
    console.log(this.logindata.value);
    this.rout.navigate(['/dashboard']);
    this.cookie.set('sravs', this.logindata.value.username);
    this.cookie.set('renu',this.name);
    this.localstorage.set('renuka', this.name);
    }
  ngOnInit() {
    this.logindata = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]],
      password: [null, Validators.required],
      
    });
  }

}
