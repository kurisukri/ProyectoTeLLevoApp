import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PconductorPageRoutingModule } from './pconductor-routing.module';

import { PconductorPage } from './pconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PconductorPageRoutingModule
  ],
  declarations: [PconductorPage]
})
export class PconductorPageModule {}
