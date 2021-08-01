import { registerLocaleData } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{

  
  @Input('valor') progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';
  
  @Output('valor') cambiarValor: EventEmitter<number> = new EventEmitter();
  
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`  
  }
  changeValue(value:number){
    if((this.progreso+value)<=100 && (this.progreso+value)>=0 )
      this.progreso+=value;
      this.cambiarValor.emit(this.progreso);
  }

  onChange(value:number){
    if(value<0 || value==null ){
      this.progreso = 0;
    }else if(value>100){
      this.progreso = 100;
    }else{
      this.progreso = value;
    }
    this.cambiarValor.emit(this.progreso);
  }
}
