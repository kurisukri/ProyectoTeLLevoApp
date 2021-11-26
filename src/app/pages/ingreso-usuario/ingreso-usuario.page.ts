import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Usuario, Sesion, TipoUsuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.page.html',
  styleUrls: ['./ingreso-usuario.page.scss'],
})
export class IngresoUsuarioPage implements OnInit {

  
  tipousuariox:TipoUsuario[];

  tipousuario={
    id:0,
    name:''

  }

  user={
    username:'',
    password:'',
    activo:0
    
  }

  sesion:Sesion=
  {
    valor:0,
    username:''
  }

  

  constructor(
    private alertController:AlertController, 
    private router:Router, 
    private storage:Storage) { }

  ngOnInit() {
    this.tipousuariox= [
      {id:1,name:"Pasajero"},
      {id:2,name:"Conductor"}
    ]
   
  }

  onSubmit(){

    this.validarusuario(this.user,this.tipousuario);
  }

  async validarusuario(u:Usuario, sel:TipoUsuario )
  {
    let seleccion=await this.storage.get(sel.id.toString());
    let usuario=await this.storage.get(u.username);
    if(usuario!=null)
    {
      if(u.password == usuario.password && sel.id == 1)
      {
        console.log("Logeado como usuario pasajero");
        this.sesion.valor=1;
        this.sesion.username=this.user.username;
        await this.storage.set('sesion',this.sesion);
        this.router.navigate(['./lista']);
        return
         
      }
      if(sel.id == 2)
        {
          console.log("Logeado como usuario conductor");
          this.sesion.valor=2;
          this.sesion.username=this.user.username;
          await this.storage.set('sesion',this.sesion);
          this.router.navigate(['./pconductor']);
          return
        }
      
    }
    else{
    console.log("No Logeado");
    this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos Incorrectos',
      subHeader: 'llamando a la policía...',
      message: 'Intente Nuevamente',
      buttons: ['OK']
    });

    await alert.present();
  }

}
