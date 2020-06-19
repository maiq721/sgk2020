import { Component, OnInit } from '@angular/core';
import { BasePopupComponent } from 'src/app/base/base-popup/base-popup.component';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-popup-add-user',
  templateUrl: './popup-add-user.component.html',
  styleUrls: ['./popup-add-user.component.scss']
})
export class PopupAddUserComponent extends BasePopupComponent implements OnInit {

  currentUser: User = new User();

  emailConfig = "";


  constructor() {
    super();
  }

  ngOnInit() {
  }

  submitSignUp() {
    
    this.emailConfig = `mailto:vietcuong.uet@gmail.com?subject=[Mời sử dụng ứng dụng E-Learning]&body=Xin chào bạn ${this.currentUser.FullName},Giáo viên <tên giáo viên> mời bạn tham gia lớp học <tên lớp học> trên hệ thống học trực tuyến <tên hệ thống>. Nếu bạn đã có tài khoản trên hệ thống, vui lòng đăng nhập để tham gia lớp học.  Nếu bạn chưa có tài khoản, hãy nhanh chóng đăng ký thông tin tại đây để có được những trải nghiệm học tập thú vị, bổ ích. Trân trọng cảm ơn!`
  }

}
