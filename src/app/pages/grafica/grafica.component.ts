import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [
  ]
})
export class GraficaComponent{

  labels: string[]= ['Titulo 1', 'Titulo 2', 'Titulo 3'];
  data1 = [
    [10, 50, 10]
  ];
}
