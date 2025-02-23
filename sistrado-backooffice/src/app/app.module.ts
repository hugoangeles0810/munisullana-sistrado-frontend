import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { PendingProceduresComponent } from './pending-procedures/pending-procedures.component';
import { AuthInterceptor } from './auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalObservarComponent } from './modal-observar/modal-observar.component';
import { LoaderComponent } from './loader/loader.component';
import { LoadingInterceptor } from './loading.interceptor';
import { ReviewProceduresComponent } from './review-procedures/review-procedures.component';
import { ApproveProceduresComponent } from './approve-procedures/approve-procedures.component';
import { ModalDeriveComponent } from './modal-derive/modal-derive.component';
import { ModalRevisarComponent } from './modal-revisar/modal-revisar.component';
import { ModalAprobarComponent } from './modal-aprobar/modal-aprobar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ToolbarComponent,
    FooterComponent,
    PendingProceduresComponent,
    ModalObservarComponent,
    LoaderComponent,
    ReviewProceduresComponent,
    ApproveProceduresComponent,
    ModalDeriveComponent,
    ModalRevisarComponent,
    ModalAprobarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
