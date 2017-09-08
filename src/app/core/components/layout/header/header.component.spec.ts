import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { CommunicateService } from '@app/core/services/communicate.service';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';
import { HttpService } from '@app/core/services/http.service';
import { UserService } from '@app/core/services/user.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports: [
        RouterModule,
        RouterTestingModule,
         StoreModule.provideStore({})
      ],
      providers: [
        CommunicateService,
        RequestsService,
        HttpService,
        PermissionsService,
        MocksService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
