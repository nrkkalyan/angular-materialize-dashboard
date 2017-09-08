import { TestBed, inject } from '@angular/core/testing';
import { RequestsService } from './requests.service';
import { PermissionsService } from './permissions.service';
import { MocksService } from './mocks.service';
import { HttpService } from '@app/core/services/http.service';
import { HttpClientModule } from '@angular/common/http';

describe('RequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestsService,
        PermissionsService,
        MocksService,
        HttpService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
