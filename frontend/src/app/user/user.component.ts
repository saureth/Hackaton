import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private router: Router
  ) { }

  ngOnInit() {
  }

  openUserSite() {
    const dialogRef = this.dialog.open(RegistrationDialogComponent, {
      maxHeight: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.router.navigate(['analytics']);
    });
  }

  openRegistrationDialog() {
  }

}
