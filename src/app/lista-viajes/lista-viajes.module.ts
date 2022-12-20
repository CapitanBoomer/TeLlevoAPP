import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaViajesPageRoutingModule } from './lista-viajes-routing.module';
import {ViajesServService} from './../servicios/viajes-serv.service';
import { ListaViajesPage } from './lista-viajes.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaViajesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaViajesPage],
  providers: [ViajesServService]
})
export class ListaViajesPageModule {}
