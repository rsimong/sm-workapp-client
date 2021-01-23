import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    termsOfUse: [false, Validators.requiredTrue]
  });
  inputFocused: string | null = null;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  _onFocus(inputName: string): void {
    this.inputFocused = inputName;
  }

  _onBlur(): void {
    this.inputFocused = null;
  }

}
