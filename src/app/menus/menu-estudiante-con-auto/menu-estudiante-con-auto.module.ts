import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEstudianteConAutoPageRoutingModule } from './menu-estudiante-con-auto-routing.module';

import { MenuEstudianteConAutoPage } from './menu-estudiante-con-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEstudianteConAutoPageRoutingModule
  ],
  declarations: [MenuEstudianteConAutoPage]
})
export class MenuEstudianteConAutoPageModule {}
