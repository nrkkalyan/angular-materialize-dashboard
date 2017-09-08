import { TestBed, inject } from '@angular/core/testing';
import { PermissionsService } from './permissions.service';
import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        PermissionsService
      ]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
