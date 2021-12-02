import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
Storage

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user:Usuario=
  {
    username:'',
    password:'',
    activo:0,
    
  }


  constructor(private storage:Storage, private router:Router, private alertController:AlertController) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.user);
    this.guardar(this.user);
    this.okok();
    this.router.navigate(['/ingreso-usuario'])
  }

  async guardar(user:Usuario)
  {
    await this.storage.set(user.username.toString(),user);
    console.log("Usuario agregado")
  }
  async okok() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registrado con éxito',
      subHeader: 'Ahora puede logearse',
      message: '',
      buttons: ['OK']
    });

    await alert.present();
  }

}
