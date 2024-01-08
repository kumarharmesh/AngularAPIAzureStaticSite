import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
   @Input() colors!:string[];
   @Output() colorEvent!:EventEmitter<string>;
   constructor(){
     this.colorEvent=new EventEmitter<string>(); 
   }
   raise(col:string):void{
     this.colorEvent.emit(col);
   }
}
