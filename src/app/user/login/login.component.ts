import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName: any;
password: any
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

login(formValues: any){
  this.authService.loginUser(formValues.userName,formValues.password)
  console.log(formValues)
this.router.navigate(['events'])
}
cancel(){
  this.router.navigate(['events'])
}
// ngForm: any{

// }
  ngOnInit(): void {
  }
 mouseoverLogin: boolean= true;
 

}
