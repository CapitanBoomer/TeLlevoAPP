import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarViajePageRoutingModule } from './registrar-viaje-routing.module';

import { RegistrarViajePage } from './registrar-viaje.page';
import { HttpClientModule } from '@angular/common/http';
import {ViajesServService} from './../servicios/viajes-serv.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistrarViajePageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistrarViajePage],
  providers :[ViajesServService]
})
export class RegistrarViajePageModule {}
