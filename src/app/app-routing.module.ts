import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RestablecerComponent } from './restablecer/restablecer.component';

const routes: Routes = [
  {path: '',component: InicioSesionComponent },
  {path: 'restablecer-contraseña',component:RestablecerComponent},
  {path:'**', pathMatch:'full', redirectTo:'restablecer-contraseña'},
  {path:'inicio-sesion',component:InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
