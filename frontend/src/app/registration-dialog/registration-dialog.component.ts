import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit {

  identificationFormGroup: FormGroup;
  errorText = '';

  constructor(private formBuilder: FormBuilder,
              private readonly dialog: MatDialog,
              private readonly loginService: LoginService,
              public dialogRef: MatDialogRef<RegistrationDialogComponent>,
              ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.identificationFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.loginService.login (this.identificationFormGroup.get('email').value,
                            this.identificationFormGroup.get('password').value
    ).subscribe(result => {
      if (!!result) {
        this.dialogRef.close(result);
      } else {
        this.errorText = 'Usuario incorrecto';
      }
    });
  }

}
