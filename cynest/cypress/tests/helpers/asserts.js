export function shouldContainText(selector, value){
    cy.get(selector).should('contains.text', value);
}

export function shouldBeVisible(selector){
    cy.get(selector).should('be.visible')
}