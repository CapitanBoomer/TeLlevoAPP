import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarContrPageRoutingModule } from './recuperar-contr-routing.module';

import { RecuperarContrPage } from './recuperar-contr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarContrPageRoutingModule
  ],
  declarations: [RecuperarContrPage]
})
export class RecuperarContrPageModule {}
