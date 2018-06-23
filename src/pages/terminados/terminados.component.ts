import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})

export class TerminadosComponent implements OnInit {
   
    constructor( public _listaDeseos: ListaDeseosService, private navController: NavController) { }    

    ngOnInit(): void { }

        /**
     * Este método nos lleva a la pantalla de los detalles de una lista
     * @param lista 
     * @param idx 
     */
    verDetalle( lista, idx ) {
        this.navController.push(DetalleComponent, { lista, idx });
    }
}
