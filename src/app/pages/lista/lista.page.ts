import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario,Sesion,TipoUsuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { alertController, toastController } from '@ionic/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  destinos: "";
  nombre:"";
  patente: "";
  constructor(private alertController:AlertController,
    private activeroute:ActivatedRoute, 
    private router:Router,
    private storage:Storage,
    private app : AppComponent,
    private toast: ToastController)
     { 
    this.activeroute.queryParams.subscribe(
    params => {
    if(this.router.getCurrentNavigation().extras.state){
    this.usuario=this.router.getCurrentNavigation().extras.state.miusuario.username;
    console.log(this.usuario);
    }
    }
    )
    }
  
    async buscar(txtDestinos)
    {
      //retorna el valor encontrado(si es que existe)
      const valor=await this.app.rescatar(txtDestinos.value);
      //muestra el valor encontrado
      if(valor != null)
      {
        this.destinos = valor[0].destinos;
        this.nombre = valor[0].nombre;
        this.patente = valor[0].patente;
        //limpia cajas de texto
        txtDestinos.value = "";
        
      }
      else
      {
      
        const toast = await this.toast.create({
          message: 'No encontrado',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
      
      }
      
    }

    

  sesion:Sesion=
  {
    valor:0,
    username:''
  }
  user={
    username:'',
    password:'',
    activo:0
    
  }

  personas=[
    {
      nombre:"Jorge",
      apellido:"Melgarejo",
      srcimagen: "../assets/images/jorge.png"
    }
    ,
    {
      nombre:"Cristian",
      apellido:"Varela",
      srcimagen: "../assets/images/varela.png"
    }
    ,
    {
      nombre:"Patito",
      apellido:"Ezpinoza",
      srcimagen: "../assets/images/pato.png"
    }
  ]

  usuario:string='';

  

  

  

  


  ngOnInit() {
    let listado = []
      this.storage.forEach((v,k) => {listado.push(v);})
      return listado;
    
  }

  


  async onClick()
  {
    
    this.cerrarSesion();
  }

  async cerrarSesion()
  {
    console.log("aaaaaaaaaaaaaaa")
    if(this.sesion.valor == 1)
      {
      
      this.sesion.valor=0;
      this.sesion.username=this.user.username;
      await this.storage.set('sesion',this.sesion);
      this.router.navigate(['./home']);
      }
    }
  
}
