import { style } from "@angular/animations";
import { TestComponent } from "./test.component";

describe('spying on functions',()=>{
    beforeEach(()=>{
        cy.mount(TestComponent).then(wrapper=>{
            cy.stub(wrapper.component,'getStyle').returns({fontSize:'30px',fontFamily:'comic sans ms'});
        });
    });

    it('test button click to change style provided by stub',()=>{
         cy.wait(1000); cy.get('button').click();
      
        //cy.get('p').should('contain.text','test works!');
        cy.get('p').should('have.css','fontSize','30px');
    });
});