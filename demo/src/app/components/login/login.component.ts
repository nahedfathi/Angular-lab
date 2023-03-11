import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthService: AuthService, private router: Router) {}
  username: string = '';
  password: string = '';
  login() {
    this.AuthService.login(this.username, this.password);
    this.router.navigate(['/products']);
  }
}
