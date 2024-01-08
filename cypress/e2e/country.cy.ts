describe('CountryComponent tests',()=>{

    it('When asia is typed three country rows are displayed by table',()=>{
        cy.visit('http://localhost:4200/country');
        cy.get('input[type=text]').type('asia');
        cy.get('table tbody tr').should('have.length',3);
    });

    it('When book is typed NO country rows are displayed by table',()=>{
        cy.visit('http://localhost:4200/country');
        cy.get('input[type=text]').type('book');
        cy.get('table tbody tr').should('have.length',0);
    });
});