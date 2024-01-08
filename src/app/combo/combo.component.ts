import { Component } from '@angular/core';
import { Countries, country } from '../models';
import { Observable, distinct, map, of } from 'rxjs';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent {
  country!:country[]; 
  continents:string[]=[];
  combo!:string;


  ary!:string[];
  forecolor!:string;

  constructor(){
    this.ary=['red','blue','orange','pink','gold','magenta','cyan'];
  }
  ngOnInit(){
    this.country=Countries;
    this.countryObs().pipe(distinct(c=>c.continent)).subscribe(c=>this.continents.push(c.continent));

  }
  countryObs():Observable<country>{
    var ob=new Observable<country>(sub=>{
      for(let c of Countries)
      {
        sub.next(c);
      }
      sub.complete();
    });
    return ob;
  }
  
}
