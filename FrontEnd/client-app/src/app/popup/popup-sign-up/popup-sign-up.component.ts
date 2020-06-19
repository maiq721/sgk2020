import { Component, OnInit, Input } from '@angular/core';
import { BasePopupComponent } from 'src/app/base/base-popup/base-popup.component';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-popup-sign-up',
  templateUrl: './popup-sign-up.component.html',
  styleUrls: ['./popup-sign-up.component.scss']
})
export class PopupSignUpComponent extends BasePopupComponent implements OnInit {

  @Input() titlePopup = "Đăng ký giáo viên";

  @Input() registerType = 1 // giáo viên;

  currentUser: User = new User();

  emailConfig = "";

  listProgram =[{ProgramID:1,ProgramName:"Tiểu học"}, {ProgramID:2,ProgramName:"Trung học cơ sở"}, {ProgramID:3,ProgramName:"Trung học phổ thông"}];

  constructor() { super(); }

  ngOnInit() {
  }

  popupClose(e) {
    this.afterClose.emit();
  }

  submitSignUp() {
    
    this.emailConfig = `mailto:vietcuong.uet@gmail.com?subject=[Xác thực tài khoản E-Learning]&body=Kính gửi Quản trị viên hệ thống học trực tuyến, Tôi là ${this.currentUser.FullName}, là giáo viên mong muốn giảng dạy trên hệ thống học trực tuyến. Tôi đã đăng ký tài khoản giáo viên trên hệ thống, kính nhờ Quản trị viên phê duyệt. Trân trọng cảm ơn!`
  }
}
