import { Component } from '@angular/core';
import { CountryOperations, abstractCountryOperations, country } from '../models';

@Component({
  selector: 'app-countryworker',
  templateUrl: './countryworker.component.html',
  styleUrls: ['./countryworker.component.css']
})
export class CountryworkerComponent {

  constructor(public service:abstractCountryOperations){}
  
  countries:country[]=[];
  cnt:{name:string,id:number}[]=[];
  allflag=false;
  err!:string;
  ngOnInit(){
    
    this.service.getCountryByContinent('all').subscribe(c=>{
      c.map((a:country)=>this.cnt.push({name:a.name,id:a.id}))
    });
  }
  byId(id:string):void{
     this.countries=[];
     this.service.getCountryById(parseInt(id)).then(c=>this.countries.push(c!));
  }
  byContinent(str:string):void{  
      this.service.getCountryByContinent(str).subscribe({
       next:c=>this.countries=c,  
       error:e=>this.err=e
    });
  }
  act(ck:boolean) {
   if(ck==true) this.byContinent('all');
  }
}
