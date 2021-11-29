import { Component, OnInit } from '@angular/core';
import { Opmenu } from './interfaces/opmenu';
import { Storage } from '@ionic/storage-angular';
import { Sesion, Usuario } from './interfaces/usuario';
import { TipoUsuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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
              ) {}

  async ngOnInit() {
     await this.storage.create();
     await this.storage.set('sesion',this.sesion);

    
  }

  //Ingresar datos al storage con key
  async agregarConKey(key:string, valor: string)
  {
    await this.storage.set(key,valor);
  }
  
  //Ingresar datos al storage con key autoincrementable opcional
  async agregar(valor:any)
  {
    let id = await this.storage.length() + 1;
    await this.storage.set(id.toString(),valor);
  }

  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
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
