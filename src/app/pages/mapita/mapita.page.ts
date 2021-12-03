import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { MapCustomService } from '../../services/map-custom.service';
import { Sesion, Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-mapita',
  templateUrl: './mapita.page.html',
  styleUrls: ['./mapita.page.scss'],
})
export class MapitaPage implements OnInit {
  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: wayPoints ={start:null,end:null}

  constructor(
    private mapCustomService : MapCustomService,
    private renderer2:Renderer2,
    private router:Router,
    private storage:Storage

  ) { }

  ngOnInit() : void{
    this.mapCustomService.buildMap() 
     .then(({geocoder,map}) => {
       //this.asGeoCoder
        this.renderer2.appendChild(this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
          );



       console.log('***TODO BIEN***');
     })
     .catch((err) => {
       console.log('******* ERROR ********',err);
     })

     this.mapCustomService.cbAddress.subscribe((getPoint) =>{
      if(this.modeInput === 'start'){
        this.wayPoints.start = getPoint;
      }
      if(this.modeInput === 'end'){
        this.wayPoints.end = getPoint;
      }
     });
     
  }

  drawRoute():void {
  console.log('***PUNTOS DE ORIGEN Y DESTINO****',this.wayPoints);
  const coords = [
    this.wayPoints.start.center,
    this.wayPoints.end.center
  ];

  this.mapCustomService.loadCoords(coords);
  }

  changeMode(mode : string): void{
    this.modeInput = mode;
  }

  testMarker(): void{
    this.mapCustomService.addMarkerCustom([-36.79526224840246, -73.06254061508037]);
  }

  user:Usuario={
    username:'',
    password:'',
    activo:0
    
  }

  sesion:Sesion=
  {
    valor:0,
    username:''
  }

  cerrarSesion(){
    this.sesion.valor=1;
    this.sesion.username=this.user.username;
    this.storage.set('sesion',this.sesion);
    this.router.navigate(['./home']);
  }
}
export class wayPoints {
  start:any;
  end:any;
}