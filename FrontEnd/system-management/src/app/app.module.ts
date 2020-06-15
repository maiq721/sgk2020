import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BaseComponent } from './base/base-component/base-component.component';
import { BasePopupComponent } from './base/base-popup/base-popup.component';
import { DirectiveModule } from './directive/directive.module';
import { UserComponent } from './pages/user/user.component';
import { ProgramComponent } from './pages/program/program.component';
import { ClassComponent } from './pages/class/class.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TopicComponent } from './pages/topic/topic.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule, DxPopupModule, DxTextBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProgramComponent,
    ClassComponent,
    SubjectComponent,
    TopicComponent,
    LessonComponent,
    HomeComponent,
    ProfileComponent,
    DisplayDataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DirectiveModule, DxDataGridModule, DxFormModule, DxPopupModule, DxTextBoxModule, DxSelectBoxModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
