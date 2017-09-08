import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '@app/core/definitions';
import { IRole } from '@app/core/definitions';
import { RequestsService } from './requests.service';

@Injectable()
export class CommunicateService {

  public roles: Observable<Array<IRole>>;

  constructor(
    private store: Store<AppState>,
    private requests: RequestsService
  ) {}

  async authenticateUser (username: string, password: string) {
    const user = await this.requests.authenticateUser(username, password);
    return user;
  }
  findRoleById (id: Number): IRole {
    let role = null;
    this.store.select('roles').subscribe((collection: Array<IRole>) => {
      role = collection.find(x => x.id === id);
    });
    return role;
  }

}
