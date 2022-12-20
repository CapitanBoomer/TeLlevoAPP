import { Component } from '@angular/core';
import { Producto, ProductoConId } from 'src/app/interfaces/viajes';
import { ActivatedRoute, Router } from '@angular/router';
import{ViajesServService} from './../servicios/viajes-serv.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage  {

  public idActiva = '';
  public datos = [];
  public respuestaa: any
  ;
  constructor(
    private activedRoute: ActivatedRoute,
    private router : Router,
    private apiProducto : ViajesServService
  ) { }

  ionViewWillEnter() {
    this.idActiva = this.activedRoute.snapshot.queryParams['id'];
    console.log(this.idActiva);
    this.apiProducto.buscarPorId(+ this.idActiva).subscribe(respuesta => {this.respuestaa = respuesta})
  }

}

