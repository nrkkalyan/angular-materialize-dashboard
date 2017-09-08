import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@app/core/services/user.service';
import { LoginComponent } from './login.component';
import { CommunicateService } from '@app/core/services/communicate.service';
import { StoreModule } from '@ngrx/store';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '@app/core/services/http.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      providers: [
        UserService,
        RequestsService,
        PermissionsService,
        MocksService,
        HttpService,
        CommunicateService
      ],
      imports: [
        StoreModule.provideStore({}),
        RouterTestingModule,
        RouterModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
