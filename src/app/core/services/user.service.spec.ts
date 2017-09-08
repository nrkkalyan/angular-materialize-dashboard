import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HttpService } from '@app/core/services/http.service';
import { CommunicateService } from './communicate.service';
import { UserService } from './user.service';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({}),
        HttpClientModule
      ],
      providers: [
        UserService,
        HttpService,
        MocksService,
        CommunicateService,
        RequestsService,
        PermissionsService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
