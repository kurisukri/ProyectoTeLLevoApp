import { appInitialize } from '@ionic/angular/app-initialize';

import { AppModule , } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from 'src/app/app.component';


Storage


@Component({
  selector: 'app-pconductor',
  templateUrl: './pconductor.page.html',
  styleUrls: ['./pconductor.page.scss'],
})
export class PconductorPage {
  

  constructor(
    private app : AppComponent
    
            ) { }

 async agregar(txtPatente ,txtNombre , txtDestinos , txtTelefono )
 {
    const datos = [{"destinos"  : txtDestinos.value,
                    "nombre"    : txtNombre.value,
                    "patente"   : txtPatente.value,
                    
                    "fono"      : txtTelefono.value
                    
                    }];
    await this.app.agregar(datos); //agrega el dato al storage

    //limpia cajas de texto
    txtPatente.value = "";
    txtNombre.value = "";
    txtDestinos.value = "";
    txtTelefono.value = "";
  }

  
}
