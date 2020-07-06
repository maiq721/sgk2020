import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import 'devextreme/data/odata/store';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/services';
import { ProgramService } from 'src/app/service/program.service';

@Component({
  templateUrl: 'display-data.component.html'
})
/// class mockup datagrid
export class DisplayDataComponent implements OnInit{
  dataSource: any;
  priority: any[];
  popupVisible: boolean = false;
  user: any;
  formMode = 1;
  popupDeleteVisible: boolean = false;

  userLogin: any;
  emailConfig= "";
  listProgram: any;

  listRole = [
    {
      RoleName: "Quản trị hệ thống",
      RoleCode: "Admin",    },
      {
        RoleName: "Giáo viên",
        RoleCode: "Teacher",    },
        {
          RoleName: "Học sinh",
          RoleCode: "Student",    }
  ];


  constructor(
    private userSv: UserService,
    private authService: AuthService,
    private programSV: ProgramService
  ) {
    
  }

  ngOnInit(){
    this.dataSource = [
      
    ];
    this.userLogin = this.authService.getUserInfo();
    this.loadData();
    this.loadProgram();
  }

  loadData(){
    this.userSv.getAllData().subscribe(res => {
      if(res && res.Success){
        this.dataSource = res.Data;
      }
    });
  }

  loadProgram(){
    this.programSV.getallData().subscribe(res => {
      if(res && res.Success){
        this.listProgram = res.Data;
      }
    });
  }

  showPpopupAdd(){
    this.user = new User();
    this.formMode = 1;
    this.popupVisible = true;
  }

  showPopupEdit(e){
    this.user = e;
    this.formMode = 2;
    this.popupVisible = true;
  }

  showPopupDelete(e){
    this.user = e;
    this.popupDeleteVisible = true;
  }

  saveData(){
    this.user.RoleName = this.listRole.filter(e => e.RoleCode == this.user.RoleCode)[0].RoleName;
    if(this.user.FullName.trim()){
      this.popupVisible = false;
      this.user.State = this.formMode == 1 ? 1 : 2;
      this.userSv.save(this.user).subscribe(res => {
        if(res.Success){
          this.loadData();
        }
      });
    }
  }

  lockUser(e, status){
    if(status == 3){
      this.emailConfig = `mailto:${e.Email}?subject=[Kích hoạt tài khoản E-Learning]&body=Kính gửi Người dùng ${e.FullName}, Tài khoản ${e.UserName} của quý khách đã được kích hoạt trên hệ thống E-Learning, xin kính mời dùng thử. Trân trọng cảm ơn!`;
    }
    this.userSv.lockUser(e.UserID, status).subscribe(res => {
      if(res && res.Success){
        this.loadData();
      }
    });
  }

  deleteData(){
    this.popupDeleteVisible = false;
    this.userSv.delete(this.user.UserID).subscribe(res => {
      if(res && res.Success){
        this.loadData();
      }
    });
  }
}
