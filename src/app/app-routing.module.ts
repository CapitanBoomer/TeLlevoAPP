import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./login/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'recuperar-contr',
    loadChildren: () => import('./login/recuperar-contr/recuperar-contr.module').then( m => m.RecuperarContrPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./menus/menu-inicio/menu-inicio.module').then( m => m.MenuInicioPageModule)
  },
  {
    path: 'menuauto',
    loadChildren: () => import('./menus/menu-estudiante-con-auto/menu-estudiante-con-auto.module').then( m => m.MenuEstudianteConAutoPageModule)
  },
  {
    path: 'menusinauto',
    loadChildren: () => import('./menus/menu-estudiante-sin-auto/menu-estudiante-sin-auto.module').then( m => m.MenuEstudianteSinAutoPageModule)
  },
  {
    path: 'historial-autos',
    loadChildren: () => import('./pedidos/historial-autos/historial-autos.module').then( m => m.HistorialAutosPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
