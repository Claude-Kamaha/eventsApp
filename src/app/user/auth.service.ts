import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: IUser;
loginUser(userName: string, password: string){
  this.currentUser = {
    id: 1,
    userName: 'Claude',
    firstName: 'Claude',
    lastName: 'Joelle',
  }

}
isAuthenticated(){
  
  return !!this.currentUser
}
  constructor() { }
  updateCurrentUser(firstName:string, lastName:string){
this.currentUser.userName=firstName
this.currentUser.lastName= lastName
  }
}
