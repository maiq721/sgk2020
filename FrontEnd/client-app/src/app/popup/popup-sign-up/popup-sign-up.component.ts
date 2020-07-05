import { Component, OnInit, Input } from '@angular/core';
import { BasePopupComponent } from 'src/app/base/base-popup/base-popup.component';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/services/user/user.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TransferDataService } from 'src/app/service/common/transfer-data.service';

@Component({
  selector: 'app-popup-sign-up',
  templateUrl: './popup-sign-up.component.html',
  styleUrls: ['./popup-sign-up.component.scss']
})
export class PopupSignUpComponent extends BasePopupComponent implements OnInit {

  @Input() titlePopup = "Đăng ký giáo viên";

  @Input() registerType = 1; // giáo viên;

  currentUser: User = new User();

  emailConfig = "";

  visibleSignupSucess = false;

  listProgram = [{ ProgramID: 1, ProgramName: "Tiểu học" }, { ProgramID: 2, ProgramName: "Trung học cơ sở" }, { ProgramID: 3, ProgramName: "Trung học phổ thông" }];

  constructor(private route: Router, private userSV: UserService, private transferSV: TransferDataService) { super(); }

  ngOnInit() {
  }

  popupClose(e) {
    this.afterClose.emit();
  }

  submitSignUp() {

    this.emailConfig = `mailto:vietcuong.uet@gmail.com?subject=[Xác thực tài khoản E-Learning]&body=Kính gửi Quản trị viên hệ thống học trực tuyến, Tôi là ${this.currentUser.FullName}, là giáo viên mong muốn giảng dạy trên hệ thống học trực tuyến. Tôi đã đăng ký tài khoản giáo viên trên hệ thống, kính nhờ Quản trị viên phê duyệt. Trân trọng cảm ơn!`;

    // xử lý RoleCode, RoleName, Status, State,UserName
    if (this.currentUser && this.currentUser.Email && this.currentUser.Password && this.currentUser.ProgramID) {
      this.currentUser.UserName = this.currentUser.Email;
      this.currentUser.State = 1;
      if (this.registerType === 1) {
        this.currentUser.RoleCode = 'Teacher';
        this.currentUser.RoleName = 'Giáo viên';
        this.currentUser.Status = 2;
      } else {
        this.currentUser.RoleCode = 'Student';
        this.currentUser.RoleName = 'Học sinh';
        this.currentUser.Status = 3;
      }

      this.userSV.signUP(this.currentUser).pipe(takeUntil(this._onDestroySub)).subscribe(res => {
        if (res && res.Success && res.Data) {
          this.visibleSignupSucess = true;
        } else {
          this.transferSV.showWarningToast("Thông tin không hợp lệ hoặc Email đã tồn tại trong hệ thống")
        }

      });
    } else {
      alert("Có lỗi xảy ra, vui lòng thử lại!")
    }

  }

  hideNotify() {
    this.visibleSignupSucess = false;
    this.visible = false;
  }

  signIn() {
    this.route.navigate(['elearning/login']);
  }
}
