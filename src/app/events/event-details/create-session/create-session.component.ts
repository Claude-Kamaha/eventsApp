import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { EventEmitter } from 'stream';
import { ISession } from '../..';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
 @Output() saveNewSession = new EventEmitter()
 @Output() cancelAddSession = new EventEmitter()

  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }
  saveSession(formValues: any){
 let session: ISession={
   id: 0,
   name:formValues.name,
   presenter: formValues.presenter,
   duration: +formValues.duration,
   level: formValues.level,
   abstract: formValues.abstract,
   voters:[]

 }
this.saveNewSession.emit(session)
  }
  cancel(){
    this.cancelAddSession.emit()
  }
  // private restrictedWords(control:FormControl): {[key: string]: any}{

  // }
}
