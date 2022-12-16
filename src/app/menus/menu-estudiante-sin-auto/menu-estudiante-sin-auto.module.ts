import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEstudianteSinAutoPageRoutingModule } from './menu-estudiante-sin-auto-routing.module';

import { MenuEstudianteSinAutoPage } from './menu-estudiante-sin-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEstudianteSinAutoPageRoutingModule
  ],
  declarations: [MenuEstudianteSinAutoPage]
})
export class MenuEstudianteSinAutoPageModule {}
