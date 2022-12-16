import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEstudianteSinAutoPage } from './menu-estudiante-sin-auto.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEstudianteSinAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEstudianteSinAutoPageRoutingModule {}
