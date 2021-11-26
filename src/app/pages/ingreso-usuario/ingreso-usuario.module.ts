import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoUsuarioPageRoutingModule } from './ingreso-usuario-routing.module';

import { IngresoUsuarioPage } from './ingreso-usuario.page';
import { ComponentsModule } from '../../components/components.module';
import { TipoUsuario } from '../../interfaces/usuario';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoUsuarioPageRoutingModule,
    ComponentsModule,
    
    
  ],
  declarations: [IngresoUsuarioPage]
})
export class IngresoUsuarioPageModule {}
