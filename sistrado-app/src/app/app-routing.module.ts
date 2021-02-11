import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivacionComponent } from './activacion/activacion.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProceduresComponent } from './my-procedures/my-procedures.component';
import { NewProcedureComponent } from './new-procedure/new-procedure.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home/procedures', component: MyProceduresComponent, canActivate: [AuthGuard] },
  { path: 'home/procedures/new', component: NewProcedureComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'verificar/:token', component: ActivacionComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
