import { appInitialize } from '@ionic/angular/app-initialize';

import { AppModule , } from './../../app.module';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppComponent } from 'src/app/app.component';
import { ToastController } from '@ionic/angular';
import { Usuario,Viajes,Sesion } from 'src/app/interfaces/usuario';

Storage


@Component({
  selector: 'app-pconductor',
  templateUrl: './pconductor.page.html',
  styleUrls: ['./pconductor.page.scss'],
})
export class PconductorPage {
  
viajes:Viajes = 
{
  destinos: "",
  nombre: "",
  patente: "",
  fono: "",
  cupos:0
}
  
  constructor(
    
    private toast: ToastController,
    private storage:Storage
            ) { }

  onSubmit()
  {
    console.log(this.viajes);
    this.guardar(this.viajes);
    // this.router.navigate(['/lista'])
  }


  async guardar(viajes:Viajes)
  {
    await this.storage.set(viajes.patente.toString(),viajes);
    console.log("Viaje agregado")
  }



  // async agregar(viaje:Viajes)
  //  {
  //   await this.storage.set(viaje.patente.toString(),viaje);
  //   console.log("Usuario agregado")
  //   const toast = await this.toast.create({
  //     message: 'Viaje creado con éxito',
  //     duration: 2000,
  //     color : "success",
  //     position: "middle"
  //   });
  //  }
  // }
    


 /* async agregar(txtPatente ,txtNombre , txtDestinos , txtTelefono )
 {
    const datos = [{"destinos"  : txtDestinos.value,
                    "nombre"    : txtNombre.value,
                    "patente"   : txtPatente.value,
                    "fono"      : txtTelefono.value
                    
                    }];
    await this.app.agregar(this.viajes); //agrega el dato al storage
    const toast = await this.toast.create({
      message: 'Viaje creado con éxito',
      duration: 2000,
      color : "success",
      position: "middle"
    });
    toast.present();
    //limpia cajas de texto
    txtPatente.value = "";
    txtNombre.value = "";
    txtDestinos.value = "";
    txtTelefono.value = "";
  } */

  /* async eliminar()
  {
    let eliminarpat = this.patente;
    if(eliminarpat.trim().length == 0)
      {
        
        const toast = await this.toast.create({
          message: eliminarpat + 'No especificado',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
        return;
      }
      else{
        const valor=await this.app.rescatar(eliminarpat);
      if(valor == null)
        {
        
        const toast = await this.toast.create({
          message: eliminarpat + 'No encontrado',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
        
        }
        else
        {
          await this.app.eliminar(eliminarpat)
          const toast = await this.toast.create({
            message: eliminarpat + 'Eliminado',
            duration: 2000,
            color : "danger",
            position: "middle"
          });
          toast.present();
        }
      }
      eliminarpat = "";
      this.nombre = "";
      this.fono = "";
     
      
  } */
  
}
