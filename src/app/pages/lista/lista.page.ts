import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {


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

  constructor(private activeroute:ActivatedRoute, private router:Router) { 
    this.activeroute.queryParams.subscribe(
      params => {
        if(this.router.getCurrentNavigation().extras.state){
          this.usuario=this.router.getCurrentNavigation().extras.state.miusuario.username;
          console.log(this.usuario);
        }
      }
    )
  }

  ngOnInit() {
  }

}
