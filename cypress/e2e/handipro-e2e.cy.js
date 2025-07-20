import { initial, lowerCase } from "lodash";

describe("Handipro", () => {
  const baseUrl = "http://localhost:3000";
  const navLinks = ["Handipro", "Home", "Markets", "Features", "Learn"];
  const endPoints = ["/home", "/markets", "/features", "/learn"];
  const testComponents = ["/markets", "/features", "/learn"];

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  /******************** Header ******************* */

  it("HEADER - Navigation items are visible", () => {
    cy.contains("Handipro").should("be.visible");
    cy.contains("Home").should("be.visible");
    cy.contains("Markets").should("be.visible");
    cy.contains("Features").should("be.visible");
    cy.contains("Learn").should("be.visible");
  });

  navLinks.forEach((link) => {
    const formattedLink = link === "Handipro" ? "home" : lowerCase(link);
    const url = baseUrl + "/" + formattedLink;

    it(`HEADER - "${link}" → "/${formattedLink}"`, () => {
      cy.visit(url);

      cy.get("header").contains(link).should("exist").click();

      cy.url().should("include", `/${formattedLink}`);
    });
  });

  /******************** Main ******************* */

  //lading page
  it(`LANDING - Clicking "Get Started" navigates to /markets`, () => {
    cy.contains("Get Started").should("be.visible").click();
    cy.url().should("include", "/markets");
  });

  //markets
  it(`MARKETS - Cards visible`, () => {
    cy.visit(baseUrl + "/markets");
    cy.get(".card").should("be.visible");
  });

  //enabled cards
  it(`MARKETS - "Explore" card navigates correctly`, () => {
    cy.visit(baseUrl + "/markets");

    // First, collect indexes of all cards with 'Explore'
    cy.get(".card:contains('Explore')").each((cards, index) => {
      // Visit markets page again
      cy.visit(baseUrl + "/markets");

      // Re-fetch the card list and click the specific one
      cy.get(".card:contains('Explore')").eq(index).click();

      // Assert the URL changed
      cy.url().should("match", /\/markets\/[a-z_0-9]+$/);
    });
  });
  //disable cards
  it(`MARKETS - "Coming soon" cards doesnot navigate`, () => {
    cy.visit(baseUrl + "/markets");

    // Loop over all cards that contain 'Coming soon'
    cy.get(".card:contains('Coming soon')").each((card, index) => {
      // Re-visit the page to reset state before each click
      cy.visit(baseUrl + "/markets");

      // Capture current URL before click
      cy.url().then((initialUrl) => {
        // Get the i-th card again and click
        cy.get(".card:contains('Coming soon')").eq(index).click();

        // Verify that the URL has NOT changed
        cy.url().should("eq", initialUrl);
      });
    });
  });

  /******************** Footer ******************* */

  it("FOOTER - Visible", () => {
    const stringArray = [
      `${new Date().getFullYear()} Handipro`,
      "Terms & Conditions",
      "Privacy Policy",
    ];
    cy.get("footer").within(() => {
      stringArray.forEach((e) => {
        cy.contains(e).should("be.visible");
      });
    });
  });

  endPoints.forEach((path) => {
    it(`FOOTER - Links work correctly from "${path}"`, () => {
      const url = baseUrl + path;
      cy.visit(url);

      cy.get("footer")
        .contains("Terms & Conditions")
        .should("exist")
        .invoke("removeAttr", "target")
        .click();
      cy.url().should("include", "/termsandconditions");

      cy.visit(url);

      cy.get("footer")
        .contains("Privacy Policy")
        .should("exist")
        .invoke("removeAttr", "target")
        .click();
      cy.url().should("include", "/privacypolicy");
    });
  });

  /*************** Component tests *******************/

  testComponents.forEach((page) => {
    it(`BACK_BUTTON - Works fine on "${page}"`, () => {
      cy.visit(baseUrl + page);
      cy.get(".navigate-back-arrow").should("exist").click();
    });

    it(`NAV_BAR - Stays fixed at top during scroll on "${page}"`, () => {
      cy.visit(baseUrl + page);
      cy.scrollTo("bottom");

      cy.get(".navbar")
        .should("be.visible")
        .and(($el) => {
          const position = $el.css("position");
          expect(["fixed", "sticky"]).to.include(position);
        });
    });
  });
});
