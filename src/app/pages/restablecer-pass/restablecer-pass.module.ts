import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPassPageRoutingModule } from './restablecer-pass-routing.module';

import { RestablecerPassPage } from './restablecer-pass.page';
import { ComponentsModule } from '../../components/components.module';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPassPageRoutingModule,
    ComponentsModule,
    
   
  ],
  declarations: [RestablecerPassPage]
})
export class RestablecerPassPageModule {}
