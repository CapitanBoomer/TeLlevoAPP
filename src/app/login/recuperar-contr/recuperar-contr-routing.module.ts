import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarContrPage } from './recuperar-contr.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarContrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarContrPageRoutingModule {}
