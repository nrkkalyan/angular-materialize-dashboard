import { Injectable } from '@angular/core';
import { IPermission } from '@app/core/definitions';

@Injectable()
export class PermissionsService {

  constructor() { }

  UsersPermissions (): Array<IPermission> {
    return [
      {
        group: 'USERS',
        key: 'USERS::CREATE',
        title: 'Create user'
      },
      {
        group: 'USERS',
        key: 'USERS::UPDATE',
        title: 'Update user'
      },
      {
        group: 'USERS',
        key: 'USERS::DELETE',
        title: 'Delete user'
      },
      {
        group: 'USERS',
        key: 'USERS::VIEW',
        title: 'View users'
      }
    ];
  }

  getAll (): Array<IPermission>  {
    return this.UsersPermissions();
  }

  findByKey (key: string) {
    return this.getAll().find(x => x.key === key);
  }

}
