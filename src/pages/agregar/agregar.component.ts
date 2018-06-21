import { Component, OnInit } from '@angular/core';
import { ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista } from '../../app/clases/listas';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})


export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    borrado: boolean = false;

    constructor( 
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public _listaDeseos: ListaDeseosService
    ) { }

    ngOnInit(): void { }

    /**
     * Función para agregar items a una lista
     */
    agregar() {

        if (this.nombreItem.length == 0) {
            return;
        }

        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push ( item );
        this.borrado = true;
        this.nombreItem = "";


    }

    /**
     * Esta función recibe un índice de un arreglo, y lo borra del arreglo
     * de items con la función splice
     * @param index 
     */
    borrar( index: number) {

        this.items.splice(index, 1);

        if (this.items.length === 0) {
            this.borrado = false;
        }

        
    }

    /**
     * Función que permite guardar la lista.
     * Primero comprueba que la lista tenga un nombre
     */
    guardarLista() {
        if (this.nombreLista.length === 0) {
            const alert = this.alertCtrl.create({
                title: 'Sin nombre de lista!',
                subTitle: 'El nombre de la lista es necesario. Por favor, inserte uno',
                buttons: ['OK']
              });
              alert.present();
        return;

        }

        let lista = new Lista( this.nombreLista );

        lista.items = this.items;

        // this._listaDeseos.listas.push( lista );

        this._listaDeseos.agregarLista (lista);

        this.navCtrl.pop();

    }


}
