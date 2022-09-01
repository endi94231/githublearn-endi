export const WEB_APP_BASE_URL = {
    DASHBOARD: Cypress.env("base_url")
}

export function visit(routes) {
    cy.visit(routes);
}

export function visitDashboard(routes) {
    cy.visit(WEB_APP_BASE_URL.DASHBOARD + routes);
}