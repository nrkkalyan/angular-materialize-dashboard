import { IUser, IResponse } from '@app/core/definitions';

export interface IRequestPool {
  User (username: string, password: string): Promise<IUser>;
  LoginUser (username: string, password: string): Promise<IResponse>;
  SignupUser (username: string, password: string): Promise<IResponse>;
}
