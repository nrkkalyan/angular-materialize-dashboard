import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '@app/core/services/user.service';
import { SidebarComponent } from './sidebar.component';
import { CommunicateService } from '@app/core/services/communicate.service';
import { RequestsService } from '@app/core/services/requests.service';
import { PermissionsService } from '@app/core/services/permissions.service';
import { MocksService } from '@app/core/services/mocks.service';
import { ActionsService } from '@app/core/services/actions.service';
import { HttpService } from '@app/core/services/http.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';


describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
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
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
