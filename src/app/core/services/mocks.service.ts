import { Injectable } from '@angular/core';
import { IUser, IRole, IResponse, IJsonErrorField } from '@app/core/definitions';
import { times, random, sample } from 'lodash';
import { PermissionsService } from './permissions.service';
import { IRequestPool } from '@app/app.definitions';

import faker from 'faker';

function timeout (ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve() , ms);
  });
}

@Injectable()
export class MocksService implements IRequestPool {

  constructor (private permissions: PermissionsService) {}
  async User(): Promise<IUser> {
    return {
        email: 'alitorabi@seekasia.com',
        username: 'alitorabi',
        firstname: 'Ali',
        lastname: 'Doe ',
        permission: [],
        role: null
    };
  }
  private checker ({username, password}): Array<any> {
        const errors = [];
        if ( !username ) {
            errors.push({
                location: 'username',
                message: 'Your username is empty'
            });
        }
        if ( !password ) {
            errors.push({
                location: 'password',
                message: 'Your password is empty'
            });
        }
        return errors;
    };


    async SignupUser (username: string, password: string): Promise<IResponse> {
        const params = {
            username, password
        };

        const checks = this.checker(params);
        if (checks.length) {
            return {
                error: {
                    code: 5,
                    errors: checks,
                    message: 'There are some problems to login'
                }
            };
        }

        await timeout(2500);
        return {
            data: {
                items: [
                    {
                        email: username,
                        firstname: 'Jonhn',
                        lastname: 'Doe',
                        role: null,
                        username: 'username'
                    } as IUser
                ]
            }
        };
    }

    async LoginUser (username: string, password: string): Promise<IResponse> {
        const params = {
            username, password
        };
        const checks = this.checker(params);
        if (checks.length) {
            return {
                error: {
                    code: 5,
                    errors: checks,
                    message: 'There are some problems to login'
                }
            };
        }
        await timeout(1500);
        if (username !== 'demo') {
            return {
                error: {
                    code: 7,
                    errors: [
                        {
                            location: 'username',
                            message: 'Please write correct username'
                        }
                    ],
                    message: 'Your username doesnt exists. use "demo"'
                }
            };
        }
        await timeout(1500);
        if (password !== 'demo') {
            return {
                error: {
                    code: 7,
                    errors: [
                        {
                            location: 'password',
                            message: 'Please write correct password'
                        }
                    ],
                    message: 'Your password doesnt exists. use "demo"'
                }
            };
        }
        return {
            data: {
                items: [
                    {
                        user: {
                            role: null,
                            email: 'demo',
                            firstname: 'Jon',
                            lastname: 'Doe',
                            permission: [
                                {
                                    key: '@@GENERAL_ACCESS',
                                    group: 'core',
                                    title: 'User general access'
                                }
                            ],
                            username: 'demo'
                        } as IUser
                    }
                ]
            }
        };
    }
}
