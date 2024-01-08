import { EventEmitter } from "@angular/core";
import { createOutputSpy } from "cypress/angular";
import { LoginComponent, UserCredentials } from "src/app/login/login.component";

describe('testing login component input and output',()=>{
   it('testing event handler',()=>{
   cy.mount(LoginComponent,{componentProperties:{
      message:'Hello World',
      loginEvent:createOutputSpy('changeSpy')
    }});
   cy.get('#lbl').should('contain.text','Hello World');
   
   cy.get("input[type='text']").type('john');
   cy.get("input[type='password']").type('123');
   cy.get("#login").click();
   cy.get('@changeSpy').should('have.been.calledOnceWith',new UserCredentials('john','123'));
 });

 it('testing event handler2',()=>{
   let w=cy.mount(LoginComponent,{componentProperties:{
      message:'Hello World',
      loginEvent:new EventEmitter<UserCredentials>()
    }}).then((wrapper)=>{ 
      
      wrapper.component.loginEvent.subscribe(us=>{
         expect(us.userName).to.equal('john');
         expect(us.password).to.equal('123');
      });
      cy.get("input[type='text']").type('john');
      cy.get("input[type='password']").type('123');
      cy.get("#login").click();
      //cy.get('@changeSpy').should('have.been.calledOnceWith',new UserCredentials('john','123'));
   });
   
   
 });
});