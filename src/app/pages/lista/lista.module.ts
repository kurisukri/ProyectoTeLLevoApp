import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';
import { ComponentsModule } from '../../components/components.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from '../../app.component';
AppComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
