import { Category } from './../../interfaces/categorias';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ComidasService } from '../../services/comidas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categorias: Category[] = [];

  constructor(private comidaservice: ComidasService, private router: Router) { }


  ngOnInit() {
    this.comidaservice.getCategorias().subscribe(resp => {
      //console.log('categorias',resp.categories);
      this.categorias.push(...resp.categories); //push: colocar elemento al final del arreglo
      console.log("Mi arreglo: ", this.categorias);
    })
  }

  onClick(cat:string) 
  {
    console.log(cat);
    let extras:NavigationExtras={
      state:{
        categoria:cat
      }
    }
    this.router.navigate(['/tipocomidas'],extras);
  }
}
