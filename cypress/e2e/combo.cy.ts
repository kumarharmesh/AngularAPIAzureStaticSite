describe('testing combobox with continents',()=>{
    it('when a continent is selected the table displays the countries of that continent',()=>{
        cy.visit('http://localhost:4200');
        cy.get("a[href='/combo']").click();
        cy.wait(500);
        cy.get('select').select('Africa');
        cy.get('table tbody tr').should('have.length',2);
        cy.url().should('contain','/combo');
    })
});