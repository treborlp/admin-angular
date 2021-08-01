import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color} from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{
  
  @Input('title') tituloGrafico: string = '';

   // Doughnut
   @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   @Input('data') doughnutChartData: MultiDataSet = [
     [350, 450, 100]
   ];

   public colors: Color[]= [
     { backgroundColor: ["#34495E","#58D68D", "#E74C3C"]}
   ]
}
