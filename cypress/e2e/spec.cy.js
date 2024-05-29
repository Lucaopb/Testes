/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

context('Teste - Cadastro site de entregas', () => {

    beforeEach(() => {
        cy.visit('https://buger-eats.vercel.app/deliver')
    });

    it('Deve Realizar o cadastro no site', () => {
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type('Lucas Teste')
      cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type('44444409925')
      cy.get(':nth-child(3) > :nth-child(1) > input').type(faker.internet.email())
      cy.get(':nth-child(3) > :nth-child(2) > input').type('11999996798')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type('06273050')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
      cy.get(':nth-child(4) > :nth-child(1) > input').type(faker.location.streetAddress())
      cy.get(':nth-child(4) > :nth-child(2) > input').type('12')
      cy.get('.delivery-method > :nth-child(1)').click()
      cy.get('p').click()
      cy.get('.button-success').click()

        
        
    });
    
});