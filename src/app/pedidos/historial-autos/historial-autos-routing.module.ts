import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialAutosPage } from './historial-autos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialAutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialAutosPageRoutingModule {}
