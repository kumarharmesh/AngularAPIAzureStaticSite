import { of } from "rxjs";
import { abstractCountryOperations, country } from "../models";
import { CountryworkerComponent } from "./countryworker.component";
//---------------------------------------
export class FakeCountryOperations extends abstractCountryOperations{
    
    ary=[new country(10,'india','delhi','asia'),
    new country(11,'china','beijing','asia')];

    override getCountryById=(i:number)=>Promise.resolve(this.ary[1]);
    override getCountryByContinent=(c:string)=>of(this.ary);
 }

//--------------------------------------
describe('testing  countryworker',()=>{
     
    var comp:CountryworkerComponent;
    it('mocking dependencies',()=>{                 
    
        cy.mount(CountryworkerComponent,{ 
            providers:[
                {provide:abstractCountryOperations,useClass:FakeCountryOperations}]
            });     

        cy.get('input[type=checkbox]').click();
        cy.get('table tbody tr').should('have.length',2);
    
    cy.wait(1000);
    cy.get('select').select('china');
    cy.get('table tbody tr').should('have.length',1);
    cy.get('table tbody tr').children().eq(0).should('contain.text','china');   
  });
});


