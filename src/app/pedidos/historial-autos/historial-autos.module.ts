import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialAutosPageRoutingModule } from './historial-autos-routing.module';

import { HistorialAutosPage } from './historial-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialAutosPageRoutingModule
  ],
  declarations: [HistorialAutosPage]
})
export class HistorialAutosPageModule {}
