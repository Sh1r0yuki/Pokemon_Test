import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { SubscribeFormComponent } from '../../components/subscribe-form/subscribe-form.component';


@Component({
  selector: 'app-login-page',
  imports: [LoginFormComponent,SubscribeFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  public isLogin = true;
}
