import { TareaComponent } from './components/tarea/tarea.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'equipo', component: EquipoComponent},
  {path:'proyecto', component: ProyectoComponent},
  {path:'tarea', component: TareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
