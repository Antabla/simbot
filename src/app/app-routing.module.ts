import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Dashboard
import { DashboardV1Page } from './pages/dashboard/v1/dashboard-v1';
import { DashboardV2Page } from './pages/dashboard/v2/dashboard-v2';
import { DashboardV3Page } from './pages/dashboard/v3/dashboard-v3';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { FormStuffPage } from './pages/form-stuff/form-stuff';



const routes: Routes = [
  { path: '', redirectTo: 'login/v1', pathMatch: 'full' },

  { path: 'dashboard/v1', component: DashboardV1Page, data: { title: 'Dashboard V1' } },
  { path: 'dashboard/v2', component: DashboardV2Page, data: { title: 'Dashboard V2' } },
  { path: 'dashboard/v3', component: DashboardV3Page, data: { title: 'Dashboard V3' } },

  //Registro de usuarios
  { path: 'registroUsuarios', component: RegisterUserComponent, data: { title: 'Registro Usuarios' } },
  { path: 'form', component: FormStuffPage, data: { title: 'Registro Usuarios' } }


];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
