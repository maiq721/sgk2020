import { LessonComponent } from './pages/lesson/lesson.component';
import { TopicComponent } from './pages/topic/topic.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { ClassComponent } from './pages/class/class.component';
import { ProgramComponent } from './pages/program/program.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'user',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: "",
    loadChildren: () => import('./ui/management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },{
    path: 'program',
    component: ProgramComponent,
    canActivate: [ AuthGuardService ]
  },{
    path: 'class',
    component: ClassComponent,
    canActivate: [ AuthGuardService ]
  },{
    path: 'subject',
    component: SubjectComponent,
    canActivate: [ AuthGuardService ]
  },{
    path: 'topic',
    component: TopicComponent,
    canActivate: [ AuthGuardService ]
  },{
    path: 'lesson',
    component: LessonComponent,
    canActivate: [ AuthGuardService ]
  },
  // ,
  // {
  //   path: '**',
  //   redirectTo: 'home',
  //   canActivate: [ AuthGuardService ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
