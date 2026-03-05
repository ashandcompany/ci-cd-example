/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Gallery", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the gallery section with a title", () => {
    cy.get("h2").contains("Photo Gallery");
  });

  it("should render 6 gallery items", () => {
    cy.get("section").find("img").should("have.length", 6);
  });

  it("should display a caption for each gallery item", () => {
    const captions = ["Forest", "Ocean", "Mountain", "City", "Desert", "River"];

    captions.forEach((caption) => {
      cy.get("p").contains(caption);
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
