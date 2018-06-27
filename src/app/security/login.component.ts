import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  login() {
    if (this.username === '' || this.password === '') {
      return;
    }
  }

}
