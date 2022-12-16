import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuEstudianteConAutoPage } from './menu-estudiante-con-auto.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEstudianteConAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuEstudianteConAutoPageRoutingModule {}
