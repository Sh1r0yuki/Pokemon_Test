import { Component, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-subscribe-form',
  imports: [MatButtonModule,MatCardModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.scss'
})
export class SubscribeFormComponent {
  @Output() public loginClicked = new EventEmitter<void>()

  public formGroup = new FormGroup({
    name: new FormControl(),
    firstname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    pseudo: new FormControl(),
  });
}
