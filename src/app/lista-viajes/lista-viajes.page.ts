import { Component, OnInit, ViewChild } from '@angular/core';
import {IonInfiniteScroll} from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductoConId } from './../interfaces/viajes';
import { ViajesServService } from './../servicios/viajes-serv.service';
@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.page.html',
  styleUrls: ['./lista-viajes.page.scss'],
})
export class ListaViajesPage implements OnInit {
  public listaProductos : Array<ProductoConId> = [];

  @ViewChild(IonInfiniteScroll)
  public infinito : IonInfiniteScroll | undefined;

  constructor(
    private apiProductos : ViajesServService,
    private router : Router
  ) { }

  ngOnInit() {
    this.apiProductos.listarProductos$.subscribe(datos =>{
      this.listaProductos = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    });
    this.apiProductos.listaPrimerosProds();
  }

  ionViewWillEnter(): void{
    this.apiProductos.listaPrimerosProds();
  }

  ionViewDidEnter(): void{
  }

  public cargarMasProds(){
    this.apiProductos.mostrarMasProds();
  }


}
