import { Component, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login-form',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() public subscribeClicked = new EventEmitter<void>()
}
