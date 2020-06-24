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
import { faSquare, faCheckSquare, faArrowLeft, faChevronCircleLeft, faChalkboard, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
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
    FontAwesomeModule
  ],
  providers: [AuthService, ScreenService, AppInfoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, faArrowLeft, faChevronCircleLeft, faChalkboard, faCheckCircle);
  }
}
