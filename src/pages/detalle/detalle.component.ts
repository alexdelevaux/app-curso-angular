import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import { ListaItem } from '../../app/clases/lista-item';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';



@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})

export class DetalleComponent implements OnInit {

    idx: number;
    lista: any;

    constructor( public navCtrl: NavController, public navParams: NavParams , public _listaDeseos: ListaDeseosService,
        public alertCtrl: AlertController) {
        console.log(this.navParams);

        // Obtengo los parámetros "idx" y "lista" del navParams, y los asigno a las variables idx y lista
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");

    }

    ngOnInit(): void { }

    /**
     * Este método cambia el valor de un item de completado=true a false, y viceversa
     * y luego actualiza la data (guarda en el localstorage) con el método actualizarData()
     * @param item 🔁
     */
    actualizar( item: ListaItem) {
        item.completado = !item.completado;
        this._listaDeseos.actualizarData();

        let todosMarcados = true;
        
        for (let item of this.lista.items) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminado = todosMarcados;

    }

    /**
     * Este método permite borrar una lista.
     */
    borrarItem() {
        const confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Está seguro de que desea eliminar la lista?',
            buttons: [
              {
                text: 'Cancelar'
              },
              {
                text: 'Eliminar',
                handler: () => {
                //   console.log('Agree clicked');
                this._listaDeseos.eliminarLista (this.idx);
                this.navCtrl.pop();
                }
              }
            ]
          });
          confirm.present();
        }

      }
    



