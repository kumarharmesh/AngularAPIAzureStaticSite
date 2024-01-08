import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class country{
    constructor(public id:number,public name:string,public capital:string,public continent:string){}
}
export const Countries=[
    new country(10,'India','Delhi','Asia'),
    new country(11,'Thailand','Bangkok','Asia'),
    new country(12,'Bangladesh','Dhaka','Asia'),
    new country(22,'England','London','Europe'),
    new country(23,'France','Paris','Europe'),
    new country(24,'Italy','Milan','Europe'),
    new country(31,'Kenya','Nairobi','Africa'),
    new country(32,'Uganda','Kampala','Africa')
    
];

export abstract class abstractCountryOperations{
   abstract getCountryById(id:number):Promise<country | undefined>;
   abstract   getCountryByContinent(continent:string):Observable<country[]>
}


export class CountryOperations extends abstractCountryOperations{ 
   getCountryById(id:number):Promise<country | undefined>
   {
       let r=Countries.find(c=>c.id==id);
       return Promise.resolve(r);
   }
   getCountryByContinent(continent:string='all'):Observable<country[]>
   {   var c;
       var obs=new Observable<country[]>(sub=>{
            if(continent=='all')
            { c=Countries; }
            else 
              c=Countries.filter(c=>c.continent==continent);
            
            if(c.length> 0)
               { sub.next(c);  sub.complete();}
             else
                sub.error('No match found...'); 
       });
       return obs;
   }
}

