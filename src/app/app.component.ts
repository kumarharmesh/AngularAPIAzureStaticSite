import { Component } from '@angular/core';
import { UserCredentials } from './login/login.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular16App';
  constructor(private router:Router){}
  gotoloc() {
      this.router.navigate(['valid']);  
  }
}
