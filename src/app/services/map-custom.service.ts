import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { Executor } from 'selenium-webdriver';
import { resolve } from 'dns';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class MapCustomService {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  lat = -36.795283246326704;
  lng= -73.06259502386428;
  zoom = 3;

  constructor() { }




  buildMap(): Promise<any>{

    return new Promise((resolve,reject)  => {

    try{

    
      this.map = new mapboxgl.Map({
        container:'map',
        style : this.style,
        zoom: this.zoom,
        center: [this.lng,this.lat]
      })
      resolve({
        map:this.map
      });
  

    } catch(e){
      reject(e);
    }

    });

  }
}
