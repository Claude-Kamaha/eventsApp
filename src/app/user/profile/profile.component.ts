import { Component, Inject,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TOASTR_TOKEN,Toastr } from 'src/app/common/toastr.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  private firstName!: FormControl;
  private lastName!: FormControl;
  constructor(
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr:Toastr,
    private router:Router
  ) { }

  ngOnInit(): void {
     this.firstName = new FormControl
    (this.authService.currentUser?.firstName, [Validators.required,
    Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl
    (this.authService.currentUser?.lastName, Validators.required)
    this.profileForm= new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
cancel(){
 this.router.navigate(['events'])
}
saveProfile(formValues: any){
  if( this.profileForm.valid){
  this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
  // this.router.navigate(['events'])
  this.toastr.success('Profile Saved')
}
}

validateFirstName(){
  return this.profileForm.controls.firstName.valid ||
  this.profileForm.controls.firstName.touched
}
validateLastName(){
 return this.profileForm.controls.lastName.valid ||
this.profileForm.controls.lastName.touched
}
}
