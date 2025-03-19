import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_KEY = 'USER';

  private _users: User[] = []

  constructor(){
    const existingUsers = localStorage.getItem(this.USER_KEY);
    if(existingUsers) {
      this._users = JSON.parse(existingUsers);
    }
  }
  public getlist(): User[] {
    return this._users
  }
  public addUserToList(user: User): void {
    this._users.push(user);
    localStorage.setItem(this.USER_KEY, JSON.stringify(this._users));
  }

  public checkUserPassword(userEmail: string, password: string): boolean {
    const user = this._users.find((user) => user.email === userEmail);

    if (user) {
      return user.password === password;
    }
    else {
      return false;
    }
  }
}
