import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // logged = false;
  // username = '';
  // password = '';

  constructor() {
  }

  ngOnInit(): void {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   this.logged = true;
    // }
  }

}
