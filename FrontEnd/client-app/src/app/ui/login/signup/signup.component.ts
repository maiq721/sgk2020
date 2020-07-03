import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  visiblePoupSignUp = false;

  registerType = 1; // giáo viên

  titlePopup = "Đăng ký giáo viên";

  constructor(private route: Router) { }

  ngOnInit() {
  }

  signIn() {
    this.route.navigate(['elearning/login']);
  }

  registerAccount(type){
    this.registerType = type;
    if(type === 1){
    this.titlePopup = "Đăng ký giáo viên";
    } else{
    this.titlePopup = "Đăng ký học sinh";
    }
    this.visiblePoupSignUp = true;
  }
}
