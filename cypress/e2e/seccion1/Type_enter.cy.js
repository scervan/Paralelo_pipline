/// <reference types="Cypress" />

describe("Functiones para Type  ", () =>{

    it("Type --> ENTER ", () =>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq',"Google") 
        cy.wait(1500)

        cy.get("[name='q']").type("cypress io {enter}" )
    })

   



})//Cierre de describe