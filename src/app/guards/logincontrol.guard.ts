import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class LogincontrolGuard implements CanActivate {

  constructor(private storage:Storage)
  {

  }

  async sesionactiva()
  {
    let sesion=await this.storage.get('sesion');
    if (sesion.valor===1)
    {
      console.log("Sesión =" + sesion.valor)
      console.log('has desbloqueado la sesión pasajero')
      return true;
    }
    if (sesion.valor===2)
    {
      console.log("Sesión =" + sesion.valor)
      console.log('has desbloqueado la sesión conductor')
      return true;
    }
    else{
      console.log('No puedes entrar, debes logearte')
      return false;
    }


  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.sesionactiva();
  }
  
}
