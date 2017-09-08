import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IUser, IRole, IPermission } from '@app/core/definitions';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  private user: IUser;
  constructor () {
    try {
      const key = window.localStorage.getItem('current_user');
      this.user = JSON.parse(key);
    } catch (error) {
      console.warn('There is no prior user logged in.');
    }
  }
  get User (): IUser {
    return (this.user as any).user;
  }

  set User (user: IUser) {
    this.user = user;
    window.localStorage.setItem('current_user', JSON.stringify(user));
  }

  get Token (): String {
    if (!this.user || !(this.user as any).token) {
      return '';
    }
    return (this.user as any).token;
  }
  logout () {
    this.user = null;
    window.localStorage.removeItem('current_user');
  }
  canActivate(permissions: Array<string>) {
    if (permissions && permissions.length) {
      for (const key of permissions) {
        const perm = this.User.role.permissions.find(x => x && x.key === key);
        if ( ! perm ) {
          return false;
        }
      }
    }
    return true;
  }

}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    private user: UserService,
    private router: Router
  ) {}
  canActivate (): boolean {
    const isLoggedIn = !!this.user.User;
    if (isLoggedIn) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
