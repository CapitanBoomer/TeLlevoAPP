import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ProductoConId,Producto} from './../interfaces/viajes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajesServService {
  private API_PRODUCTOS_URL = 'http://localhost:3000/viajes'

  private paginaActual = 0;

  private comportamientoListar = new BehaviorSubject<Array<ProductoConId>>([]);
  public listarProductos$ = this.comportamientoListar.asObservable();
  constructor(private cliente : HttpClient) { }

  public agregarProducto(nuevoProducto : Producto): Observable<any>{
    return this.cliente.post(this.API_PRODUCTOS_URL, nuevoProducto,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
  public listaPrimerosProds(){
    this.cliente.get<Array<ProductoConId>>(`${this.API_PRODUCTOS_URL}?_page=1&_limit=5`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comportamientoListar.next(datos);
    })
  }
  public mostrarMasProds(){
    this.cliente.get<Array<ProductoConId>>(`${this.API_PRODUCTOS_URL}?_page=${this.paginaActual}&_limit=5`)
    .subscribe(datos => {
      if(datos){
        this.paginaActual = this.paginaActual + 1;
        this.comportamientoListar.next(this.comportamientoListar.getValue().concat(datos));
      }

    })
  }
 public getviaje(){
  this.cliente.get<any>(this.API_PRODUCTOS_URL).subscribe(data=>{this.comportamientoListar.next(data)});
 }
 public buscarPorId(id :number): Observable<ProductoConId>{
  return this.cliente.get<ProductoConId>(`${this.API_PRODUCTOS_URL}/${id}`);
}
}
