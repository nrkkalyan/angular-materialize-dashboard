import { Injectable } from '@angular/core';
import { IUser, IRole } from '@app/core/definitions';
import { IRequestPool } from '@app/app.definitions';
import { times, random, sample } from 'lodash';
import { PermissionsService } from './permissions.service';
import { IResponse } from '@app/core/definitions';
import { RequestOptions, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '@app/core/services/user.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../../environments/environment';

/**
 * All mocks data for application sits here. In general, data doesn't belong to components,
 * the data layer is completely independent from the componenets;
 * Components read data from store.
 * Hence, reducers, actions and mocks all are flat in the project directory.
 */

@Injectable()
export class HttpService implements IRequestPool {

  constructor (
    private user: UserService,
    private permissions: PermissionsService,
    private http: HttpClient
  ) {}

  async SignupUser (username: string, password: string): Promise<IResponse> {
      const body = {
          username, password
      };
      return await this.POST('user/signup', body);
  }

  async User (username: string, password: string): Promise<IUser> {
      return null;
  }
  async LoginUser (username: string, password: string): Promise<IResponse> {
      const body = {
          username, password
      };
      return await this.POST('user/signin', body);
  }

  private GET (url: string, header: any = {}): Promise<any> {
    header = {
      ... header,
      'content-type': 'application/json',
      'x-token': this.user.Token
    };
    const headers = new HttpHeaders(header);
    const URL = `${environment.endpoint}/${url}`;
    return this.http.get(URL, {headers: headers}).toPromise();
  }

  private POST (url: string, body: any = {}, header: any = {}): Promise<any> {

    header = {
      ... header,
      'content-type': 'application/json',
      'x-token': this.user.Token
    };
    const headers = new HttpHeaders(header);
    const URL = `${environment.endpoint}/${url}`;
    return this.http.post(URL, body, {headers: headers}).toPromise();
  }

  private PUT (url: string, body: any = {}, header: any = {}): Promise<any> {

    header = {
      ... header,
      'content-type': 'application/json',
      'x-token': this.user.Token
    };
    const headers = new HttpHeaders(header);
    const URL = `${environment.endpoint}/${url}`;
    return this.http.put(URL, body, {headers: headers}).toPromise();
  }
}
