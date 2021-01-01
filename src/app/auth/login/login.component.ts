import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public maxDate!: Date;
  public loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.loginForm = new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email] ),
      'password': new FormControl('',Validators.required)
    });
  }

  public onSubmit(): void {
    console.log(this.loginForm.value)
  }

}
