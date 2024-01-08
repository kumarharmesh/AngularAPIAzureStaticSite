import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  count:number=0;
  ary:string[]=[];
  c1() {
    this.ary.push('one');
}
  c2() {
    this.ary.push('two');
}
 
  
}
