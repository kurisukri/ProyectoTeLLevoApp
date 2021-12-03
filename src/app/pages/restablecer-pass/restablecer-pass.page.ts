import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-restablecer-pass',
  templateUrl: './restablecer-pass.page.html',
  styleUrls: ['./restablecer-pass.page.scss'],
})
export class RestablecerPassPage implements OnInit {

  user={
    username:'',
    password:'',
    activo:0
  }

  constructor(private alertController:AlertController,
    private storage:Storage) { }

  

  ngOnInit() {
  }

  onSubmit(){
    this.validarUser(this.user)
    
  }
  
  async validarUser(u:Usuario)
  {
    let usuario=await this.storage.get(u.username);
    if(usuario!=null)
    {
      if(u.username == usuario.username)
      {
        console.log('Tu contraseña es: '+usuario.password)
        this.correcto(u);
      }
    else
      {
        this.presentAlert();
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Correo inválido',
      subHeader: 'Correo no encontrado en nuestra base de datos',
      message: 'Intente Nuevamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  async correcto(u: Usuario)
   {
   // let usuario=await this.storage.get(us.password);//
    let usuario=await this.storage.get(u.username);
    if(u.username == usuario.username)
    {
      console.log('Tu contraseña es: '+usuario.password)
      const alert = await this.alertController.create(
        {
        cssClass: 'my-custom-class',
        header: 'Casi estamos!',
        subHeader: 'Tu contraseña es :'+usuario.password,
        message: 'Revise su correo',
        buttons: ['OK']
      });
      await alert.present();
    }
    
  }

}
