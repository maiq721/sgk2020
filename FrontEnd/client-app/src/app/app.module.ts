import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BaseComponent } from './base/base-component/base-component.component';
import { DirectiveModule } from './directive/directive.module';
import { ToolbarModule } from './ui/toolbar/toolbar.module';
import { SingleCardModule } from './layouts';
// Import the library module
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare, faArrowLeft, faChevronCircleLeft, faChalkboard, faCheckCircle, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/token-interceptor.service';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ManagementComponent } from './ui/management/management.component';
import { ManagementModule } from './ui/management/management.module';
import { LoginModule } from './ui/login/login.module';
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    ToolbarModule,
    HttpClientModule,
    LoginFormModule,
    SingleCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DirectiveModule,
    FontAwesomeModule,
    ManagementModule,
    LoginModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faArrowLeft, faChevronCircleLeft, faChalkboard, faCheckCircle, faEdit, faTrashAlt);
  }
}
