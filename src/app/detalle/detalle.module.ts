import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ViajesServService} from './../servicios/viajes-serv.service';
import { DetallePageRoutingModule } from './detalle-routing.module';

import { DetallePage } from './detalle.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetallePage],
  providers : [ViajesServService]
})
export class DetallePageModule {}
