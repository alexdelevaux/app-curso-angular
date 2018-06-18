import { Component } from '@angular/core';

import { TerminadosComponent } from '../terminados/terminados.component';
import { PendientesComponent } from '../pendientes/pendientes.component';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root: any = PendientesComponent;
  tab2Root: any = TerminadosComponent;

  constructor() {

  }
}
