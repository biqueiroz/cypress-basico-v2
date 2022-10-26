
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {

        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function(){
        cy.visit('./src/index.html')

        cy.get('#firstName')
        .type('Bianca')
        .should('have.value', 'Bianca')

        cy.get('#lastName')
        .type('Queiroz')
        .should('have.value', 'Queiroz')

        cy.get('#email')
        .type('biancagqueiroz@gmail.com')
        .should('have.value', 'biancagqueiroz@gmail.com')

        cy.get('#open-text-area')
        .type('primeiro teste com cypress')
        .should('have.value', 'primeiro teste com cypress')

        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })
  })
  