import { Injectable, Injector } from '@angular/core';
import { IRole, IUser, IResponse} from '@app/core/definitions';
import { IRequestPool } from '@app/app.definitions';
import { PermissionsService } from './permissions.service';
import { sample, times} from 'lodash';
import { MocksService } from './mocks.service';
import { HttpService } from './http.service';

@Injectable()
export class RequestsService {
  private requests: IRequestPool;

  constructor(
    private permissions: PermissionsService,
    private mocks: MocksService,
    private injector: Injector,
    private http: HttpService
  ) {
    this.requests = this.injector.get(MocksService);
  }

  async authenticateUser (username: string, password: string): Promise<IUser> {
    const user = await this.requests.LoginUser(username, password);
    return user as any;
  }

  async SignupUser (username: string, password: string): Promise<any> {
    return await this.requests.SignupUser(username, password);
  }
}
