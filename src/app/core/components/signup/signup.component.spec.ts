import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { SignupComponent } from './signup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpService } from '@app/core/services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      providers: [
        RequestsService,
        MocksService,
        HttpService,
        PermissionsService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
