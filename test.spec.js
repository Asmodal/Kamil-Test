/// <reference types = "cypress" />

import faker from 'faker'
describe('Registration', () => {
  const email = faker.internet.email()
  before(() => {
  
      cy.visit('http://automationpractice.com/index.php')
      cy.get('.login').click()
      cy.get('input[name=email_create]').type(email)
      cy.get('#SubmitCreate > span').click()
      Cypress.config('defaultCommandTimeout', 10000);
      cy.get('#id_gender1').click()
      cy.get('#customer_firstname').type('Kamil')
      cy.get('#customer_lastname').type('Labedzki')
      cy.get('#passwd').type('1234567')
      cy.get("#days").select('2')
      cy.get('#months').select('2')
      cy.get('#years').select('1977')
      cy.get('#company').type('dasdasfasd')
      cy.get('#address1').type('asfaisjs')
      cy.get('#address2').type('asdfgasdg')
      cy.get('#city').type('asdfsg')
      cy.get('#id_state').select('5')
      cy.get('#postcode').type('12345')
      cy.get('#phone').type('123456789')
      cy.get('#phone_mobile').type('123456789')
      cy.get('#submitAccount > span').click()
      cy.get('.logo').click()
    cy.get('.logout').click()
  })

  beforeEach(() =>{
  cy.get('.logo').click()  
  cy.get('.login').click()
  cy.get('#email').type(email)
  cy.get('#passwd').type('1234567')
  cy.get('#SubmitLogin > span').click()
  cy.get('.logo').click()

})
  it('Dodawanie i płatność', () => {
    
    cy.get('.sf-menu > :nth-child(3) > a').click()
    cy.get('.right-block').trigger('mouseover')
    cy.get('span').contains('Add to cart').click()
    cy.get('.button-container > .button-medium > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('#cgv').click()
    cy.get('.cart_navigation > .button > span').click()
    cy.get('.bankwire').click()
    cy.get('#cart_navigation > .button > span').click()
    cy.get('.logo').click()
  })
   it('Dodawanie i odejmowanie produktw', () => {
      
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get(':nth-child(2) > .subcategory-image > .img > .replace-2x').click()
        cy.get('.right-block').trigger('mousemove').click()
        cy.get('span').contains('Add to cart').click({ force: true })
        cy.get('.continue > span').click()
        cy.get('.product_img_link > .replace-2x').click()
        cy.get('.button-plus > span').click('center',2)
        cy.get('#group_1').click().type('m')
        cy.get('span').contains('Add to cart').click()
        cy.get('.continue > span').click()
        cy.get('#quantity_wanted').clear().type('5')
        cy.get('#group_1').click().type('l')
        cy.get('span').contains('Add to cart').click()
        cy.get('.button-medium > span').click()
        cy.get('#cart_quantity_down_4_16_0_562586 > span').click()
        cy.get('#cart_quantity_down_4_17_0_562586 > span').click()
        cy.get('#cart_quantity_down_4_18_0_562586 > span').click()
        cy.get('.logo').click()

      })
  it('dodawanie sukienki przecenionej do listy życzeń',() =>{
    cy.get('#homefeatured > .last-mobile-line > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
    //cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    Cypress.config('defaultCommandTimeout', 10000);
    cy.get('div[class="box-cart-bottom"]').contains('wishlist_button').click()
    cy.get('#wishlist_button').click()
    cy.get('.fancybox-item').click()
    
   })
})

