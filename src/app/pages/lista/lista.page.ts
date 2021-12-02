import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario,Sesion,TipoUsuario, Viajes } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { alertController, toastController } from '@ionic/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  
  listado: Viajes[] = [];
  

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
  
    // async buscar(destinos)
    // {
    //   //retorna el valor encontrado(si es que existe)
    //   const valor=await this.app.rescatar(destinos.value);
    //   //muestra el valor encontrado
    //   if(valor != null)
    //   {
    //     this.viajes.destinos = valor.destinos;
    //     this.viajes.nombre = valor[0].nombre;
    //     this.viajes.patente = valor[0].patente;
    //     this.viajes.fono= valor[0].fono;
    //     //limpia cajas de texto
    //     destinos.value = "";
        
    //   }
    //   else
    //   {
      
    //     const toast = await this.toast.create({
    //       message: 'No encontrado',
    //       duration: 2000,
    //       color : "danger",
    //       position: "middle"
    //     });
    //     toast.present();
      
    //   }
      
    // }

    

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

/* 
  personas:[
    {
      nombre: "" ,
      apellido :"",
      srcimagen: "../assets/images/varela.png"
      
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
  ] */
  
  
  async ngOnInit()
  {
   
  }
  
  onSubmit(){
  
    
  } 
  

  // listar()
  // {
  //   this.listado = this.app.listar()
  // }






  usuario:string='';

  


   


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
