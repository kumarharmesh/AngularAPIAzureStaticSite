import { EventEmitter } from "@angular/core";
import { ColorComponent } from "../color/color.component";
import { createOutputSpy } from "cypress/angular";
/*
describe('testing color component input and output',()=>{
    var comp:ColorComponent;
    beforeEach(()=>{
        cy.mount(ColorComponent,{componentProperties:{
            colors:['blue','red','gold'],
            colorEvent:new EventEmitter<string>()
        }}).then(wrapper=>{
             comp=wrapper.component;
        });
    });

    it('when blue is clicked the event handler provide string with a value blue',()=>{
        comp.colorEvent.subscribe(c=> expect(c).equals('blue'));
        cy.get('ul').children().should('have.length',3);
        cy.get('ul').children().first().children().first().click();
    });
});
*/
describe('testing color component input and output',()=>{
    
    beforeEach(()=>{
        cy.mount(ColorComponent,{componentProperties:{
            colors:['blue','red','gold'],
            colorEvent:createOutputSpy('colorSpy')
        }});
    });

    it('when red is clicked the event handler provide string with a value red',()=>{
        cy.get('ul').children().should('have.length',3);
        cy.get('ul').children().eq(1).children().first().click();
        cy.get('@colorSpy').should('have.been.calledOnceWith','red');
    });
});
