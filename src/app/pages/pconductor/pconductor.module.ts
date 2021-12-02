import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PconductorPageRoutingModule } from './pconductor-routing.module';

import { PconductorPage } from './pconductor.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicStorageModule } from '@ionic/storage-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PconductorPageRoutingModule,
    ComponentsModule,
    
  ],
  declarations: [PconductorPage]
})
export class PconductorPageModule {}
