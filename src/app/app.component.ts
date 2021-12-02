import { Viajes } from 'src/app/interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';
import { Storage } from '@ionic/storage-angular';
import { Sesion, Usuario } from './interfaces/usuario';
import { TipoUsuario } from './interfaces/usuario';
import { MapCustomService } from './services/map-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  listado: Viajes[] = []; 
  Employee={
    id:0,
    name:''

  }


  sesion:Sesion=
  {
    valor:0,
    username:''
  }
  
  opciones:Opmenu[]=[
    {
      link:"home",
      texto:"home",
      icono:"home"
    },
    {
      link:"lista",
      texto:"Disponibilidad",
      icono:"list-outline"
    }
      
  ]  
  constructor(private storage:Storage,
              private mapCustomService: MapCustomService
              ) {}

  async ngOnInit() {
     await this.storage.create();
     await this.storage.set('sesion',this.sesion);

     this.mapCustomService.buildMap() 
    .then((data) => {
      console.log('***TODO BIEN***',data);
    })
    .catch((err) => {
      console.log('******* ERROR ********',err);
    })
     
  }

  //Ingresar datos al storage con key
  async agregarConKey(key:string, valor: string)
  {
    await this.storage.set(key,valor);
  }
  
  //Ingresar datos al storage con key autoincrementable opcional
  async agregar(valor:Viajes)
  {
    
    await this.storage.set(valor.patente.toString(),valor);
  }

  async rescatar(destinos:string)
  {
    return await this.storage.get(destinos);
  }
  async listar()
  {
    let listado = []
    this.storage.forEach((v,k) => {listado.push(v);})
    return listado;
  }
  eliminar(key:string)
  {
    this.storage.remove(key);
  }

}
