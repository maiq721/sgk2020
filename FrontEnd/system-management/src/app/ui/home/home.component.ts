import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import notify from "devextreme/ui/notify";
import { PercentPipe } from '@angular/common';
import { UserService } from 'src/app/service/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listUser = [
    {
      User: "Giáo viên",
      Type: 1,
      val: 0
    },
    {
      User: "Học sinh",
      Type: 2,
      val: 0,
    },
    {
      User: "Quản trị hệ thống",
      Type: 3,
      val: 0,
    }
  ];

  listData: any;



  pipe: any = new PercentPipe("en-US");
  constructor(private el: ElementRef,
    private userService: UserService
    
    ) { 
      
    }

  ngOnInit() {
    this.userService.getAllData().subscribe(res => {
      if(res && res.Success){
        this.listData = res.Data;
        this.listData.forEach(element => {
          if(element.RoleCode === "Teacher"){
            this.listUser[0].val++;
          }
          if(element.RoleCode === "Admin"){
            this.listUser[1].val++;
          }
          if(element.RoleCode === "Student"){
            this.listUser[2].val++;
          }
        });
        this.listUser = _.cloneDeep(this.listUser);
      }
    });

  }
  
  customizeTooltip = (arg: any) => {
    return {
        text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
    };
}

}
