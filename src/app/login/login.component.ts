import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() message!:string;
  @Output() loginEvent:EventEmitter<UserCredentials>;
  constructor(){
    this.loginEvent=new EventEmitter<UserCredentials>(); 
  }
  login(uid:string,pwd:string):void{
    let cred=new UserCredentials(uid,pwd);
    this.loginEvent.emit(cred);
  }
}

export class UserCredentials{
  constructor(public userName:string,public password:string){}
}