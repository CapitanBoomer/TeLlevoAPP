import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {   Producto } from './../interfaces/viajes';
import{ViajesServService} from './../servicios/viajes-serv.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registrar-viaje',
  templateUrl: './registrar-viaje.page.html',
  styleUrls: ['./registrar-viaje.page.scss'],
})
export class RegistrarViajePage implements OnInit {
  public formulario! : FormGroup;

  constructor(
    private alertController: AlertController,
    private fb : FormBuilder,
    private apiProducto : ViajesServService,
    private router : Router
  ) {this.crearFormulario();}

    public crearFormulario(){
      this.formulario = this.fb.group({
        nombreusuario : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
        auto : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]),
        costoviaje : new FormControl('', [Validators.required, Validators.min(1000), Validators.max(10000)]),
        destino : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(35)]),
        puestos : new FormControl('', [Validators.required, Validators.min(1), Validators.max(4)]),
        patente : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
        detalles : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]),

      })
    }



  public campo(control : string){
    return this.formulario.get(control);
  }


  public guardarDatos(){
    this.apiProducto.agregarProducto({
      ...this.formulario.value,
    })
    .subscribe(data => { this.presentAlert()
      this.router.navigate(['/menuauto']);

    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Felicidades',
      subHeader: 'Registro del viaje exitoso',
      message: 'te notificaremos cuando los puestos se ocupen',
      buttons: ['Entendido'],
    });

    await alert.present();
  }
  ngOnInit() {

  }

}
