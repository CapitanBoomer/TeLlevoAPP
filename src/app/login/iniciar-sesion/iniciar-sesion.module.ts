import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarSesionPageRoutingModule } from './iniciar-sesion-routing.module';

import { IniciarSesionPage } from './iniciar-sesion.page';
import {EstudiantesServService} from './../../servicios/estudiantes-serv.service';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    IniciarSesionPageRoutingModule
  ],
  declarations: [IniciarSesionPage],
  providers: [EstudiantesServService]
})
export class IniciarSesionPageModule {}
