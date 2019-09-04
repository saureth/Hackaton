import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule} from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { RegistrationDialogComponent } from './registration-dialog/registration-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsPanelComponent } from './analytics-panel/analytics-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationDialogComponent,
    AnalyticsPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    SharedModule
  ],
  exports: [],
  entryComponents:[
    RegistrationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
