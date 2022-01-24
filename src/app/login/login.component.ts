import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  msg: string;

  clickEvent() {
    console.log('Button is Clicked');
  }
}
