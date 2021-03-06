import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { appReducersGenerator } from '@app/app.reducers';
import { CommunicateService } from './communicate.service';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { HttpService } from '@app/core/services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('CommunicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        appReducersGenerator(),
        HttpClientModule
      ],
      providers: [
        CommunicateService,
        RequestsService,
        HttpService,
        PermissionsService,
        MocksService
      ]
    });
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
