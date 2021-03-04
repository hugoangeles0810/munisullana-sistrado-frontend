import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendingProceduresComponent } from './pending-procedures/pending-procedures.component';
import { ReviewProceduresComponent } from './review-procedures/review-procedures.component';
import { ApproveProceduresComponent } from './approve-procedures/approve-procedures.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'pending-procedures', component: PendingProceduresComponent, canActivate: [AuthGuard] },
  { path: 'review-procedures', component: ReviewProceduresComponent, canActivate: [AuthGuard] },
  { path: 'approve-procedures', component: ApproveProceduresComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
