import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'titan-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isLoading: boolean;
  @Output() loginEvent = new EventEmitter<{ username: string, password: string }>();

  username = '';
  password = '';

  constructor() { }


  login() {
    if (this.username === '' || this.password === '') {
      return;
    }
    const loginObject = {
      username: this.username,
      password: this.password,
    };
    this.loginEvent.emit(loginObject);
  }

}
