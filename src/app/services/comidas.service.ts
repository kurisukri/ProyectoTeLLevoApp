import { Categories, Meals } from './../interfaces/categorias';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  tipo:string="Chicken"

  constructor(private httpclient:HttpClient) { }

  getCategorias()
  {
    return this.httpclient.get<Categories>(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  }

  getComidasxTipo(tipo:string)
  {
    return this.httpclient.get<Meals>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tipo}`);
  }

}
