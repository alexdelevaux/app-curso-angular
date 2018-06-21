import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})

export class PendientesComponent implements OnInit {

    constructor( public _listaDeseos: ListaDeseosService, private navController: NavController) { }

    ngOnInit(): void { }

    /**
     * Se mueve a la ventana de agregar una nueva lista
     */
    irAgregar() {
        this.navController.push(AgregarComponent);
    }

    /**
     * Este método nos lleva a la pantalla de los detalles de una lista
     * @param lista 
     * @param idx 
     */
    verDetalle( lista, idx ) {
        this.navController.push(DetalleComponent, { lista, idx });
    }

}
