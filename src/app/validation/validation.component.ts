import { Component } from '@angular/core';
import { UserCredentials } from '../login/login.component';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {
  msg='';
  validation(user:UserCredentials):void{
     if(user.userName=='john' && user.password=='123')
      this.msg='Success..';
    else
      this.msg='Login Failed...';
  }
}
