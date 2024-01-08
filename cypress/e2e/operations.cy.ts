describe('testing combobox with country and checkbox',()=>{
    it('when a continent is selected the table displays the countries of that continent',()=>{
        cy.visit('http://localhost:4200');
        cy.get("a[href='/worker']").click();
        cy.wait(500);
        cy.url().should('contain','/worker');
        cy.wait(300);
        cy.get('select').select('England');
        cy.get('table tbody tr').should('have.length',1);
        
        cy.wait(500);
        cy.get("input[type='checkbox']").check();
        cy.get('table tbody tr').should('have.length.greaterThan',5);  
    });

    it('when checkbox is not checked',()=>{
        cy.visit('http://localhost:4200');
        cy.get("a[href='/worker']").click();
        cy.wait(500);
        cy.url().should('contain','/worker');
        cy.wait(300);
        cy.get("input[type='checkbox']").should('not.be.checked');
        cy.get('table tbody tr').should('have.length',0);  

        
    });

});