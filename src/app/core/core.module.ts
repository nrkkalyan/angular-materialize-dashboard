import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appReducersGenerator } from '@app/app.reducers';
import { LoginComponent } from '@app/core/components/login/login.component';
import { PermissionsService } from '@app/core/services/permissions.service';
import { RequestsService } from '@app/core/services/requests.service';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';
import { UserService, AuthGuard } from '@app/core/services/user.service';
import { CommunicateService } from '@app/core/services/communicate.service';
import { HttpService } from '@app/core/services/http.service';
import { SignupComponent } from '@app/core/components/signup/signup.component';
import { appRoutesGenerator } from '@app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { RequestingComponent } from '../shared/requesting/requesting.component';
import { ProgressComponent } from '../shared/progress/progress.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { IndexComponent } from './components/index/index.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}

export const CoreDeclarations = [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RequestingComponent,
    ProgressComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    IndexComponent,
];

export const CoreImports = [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    appRoutesGenerator(),
    appReducersGenerator()
];

export const CoreProviders = [
    PermissionsService,
    RequestsService,
    MocksService,
    ActionsService,
    UserService,
    CommunicateService,
    AuthGuard,
    HttpService
];

export class AppModule { }

