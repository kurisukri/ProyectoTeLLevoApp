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


  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.user);
    this.guardar(this.user);
    this.router.navigate(['/lista'])
  }

  async guardar(user:Usuario)
  {
    await this.storage.set(user.username.toString(),user);
    console.log("Usuario agregado")
  }
}
