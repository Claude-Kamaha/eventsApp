import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser | undefined
loginUser(userName: string, password: string){
  this.currentUser = {
    id: 1,
    userName: 'Claude',
    firstName: 'Claude',
    lastName: 'Joelle',
  }

}
isAuthenticated(){
  console.log(!!this.currentUser)
  return !!this.currentUser
}
  constructor() { }
}
