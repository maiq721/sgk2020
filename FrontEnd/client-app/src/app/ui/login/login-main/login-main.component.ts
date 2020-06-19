import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.route.navigate(['/login/signup']);
  }
  login(){
    this.route.navigate(['/client/main']);

  }
}
