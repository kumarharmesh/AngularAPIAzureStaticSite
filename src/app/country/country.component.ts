import { Component } from '@angular/core';
import { Countries, country } from '../models';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
   countries!:country[];
   continent!:string;
   ngOnInit(){
      this.countries=Countries;
   }
}
