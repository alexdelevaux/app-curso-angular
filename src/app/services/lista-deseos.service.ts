import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() {

        this.cargarData();

        console.log('Servicio creado!!');
        
    }

    /**
     * Guarda un item (pasado a String usando JSON.stringify)
     * en el localstorage
     */
    actualizarData() {
        localStorage.setItem( "data", JSON.stringify(this.listas));
    }

    /**
     * Obtiene un item del localstorage, y lo guarda en el array
     * listas, convertido a JSON usando JSON.parse
     */
    cargarData() {
        if ( localStorage.getItem("data")){
            this.listas = JSON.parse(localStorage.getItem( "data"));    
        }
    }

    /**
     * Recibe una lista como parámetro, la guarda en el array "listas",
     * y actualiza la lista (método actualizarData())
     * @param lista 
     */
    agregarLista( lista: Lista) {
        this.listas.push( lista );
        this.actualizarData();
    }

    eliminarLista( idx: number) {
        this.listas.splice( idx,1 );
        this.actualizarData();
    }
    


}