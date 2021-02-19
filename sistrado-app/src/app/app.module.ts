import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ActivacionComponent } from './activacion/activacion.component';
import { MyProceduresComponent } from './my-procedures/my-procedures.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewProcedureComponent } from './new-procedure/new-procedure.component';
import {CopyrightComponent} from './copyright/copyright.component';
import {RecoveryPasswordComponent} from './recovery-password/recovery-password.component';
import {ResendConfirmationComponent} from './resend-confirmation/resend-confirmation.component';
import { AlertNewProcedureComponent } from './alert-new-procedure/alert-new-procedure.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    AlertDialogComponent,
    ActivacionComponent,
    MyProceduresComponent,
    ToolbarComponent,
    NewProcedureComponent,
    CopyrightComponent,
    RecoveryPasswordComponent,
    ResendConfirmationComponent,
    AlertNewProcedureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
