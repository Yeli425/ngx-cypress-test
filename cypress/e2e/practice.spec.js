/// <reference types="cypress" />



Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
describe('practice',()=>{

it('first test', ()=>{


cy.visit('https://www.canyon.com/en-us/?gclsrc=aw.ds&gad_source=1&gclid=CjwKCAjw_4S3BhAAEiwA_64YhikIQCD7iZcFnhJMFPvzUkn_SO0-8jmcu9YDwMNw3pLmMzXz_31NmRoCHVcQAvD_BwE')

cy.get('[class="button button--primary cookiesModal__button js-closeModal js-saveCookiesChoice xlt-modalCookiesBtnAllowAll"]').click()
cy.on('window:confirm', () => true)

cy.get('[aria-label="Mountain Bikes"]').trigger('mouseover')
cy.get('[aria-label="E-MTB"]').click({force:true})
cy.get('a[data-gtm-eventlabel="Mountain Bikes | E-MTB | Neuron:ON | Neuron:ONfly CF"][aria-label="Neuron:ONfly CF"]').click({force:true})
cy.get('a[title="Neuron:ONfly CF 7"][class="productTileDefault__productName link link--noUnderline js-productTileLink xlt-productTileLink"]').click()
cy.scrollTo(0,500);
cy.get('[data-product-size="M"]').click()
cy.scrollTo(0,500);
cy.get('[aria-label="Black"][data-compare-pid="10003171"]').click()
cy.scrollTo(0,200);
cy.contains('Add to cart').click()
cy.contains('Show Cart').click()

cy.contains('div','Order summary').as('orderSummary')
cy.get('@orderSummary').find('[class="cartOrderSummary__cartDetail cartOrderSummary__cartDetail--amount sub-total"]').should('contain','$4,899.00')
cy.contains('Checkout').click()
cy.get('#guest-form-email').clear().type('elzat@gmail.com{enter}')
cy.get('[class="button button--secondary js-emailVerificationErrorDissmiss"]').click()
cy.get('#dwfrm_shipping_shippingAddress_addressFields_stateCode').invoke('prop','validationMessage').should('contain','Please select an item in the list.').then( validatMessage =>{
    expect(validatMessage).to.include('Please select an item in the list.')
})
cy.get('#dwfrm_shipping_shippingAddress_addressFields_stateCode').then(optionlist=>{
    cy.wrap(optionlist).select('Virginia')
    
})










})
})