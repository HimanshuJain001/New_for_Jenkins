describe('Zepto Website Navigation', () => {
  const secondCarouselItemSelector = '#above-list-container .embla__container > :nth-child(2)';
  const login_btn = '[data-testid="login-btn"]';
  const phone_field = "//input[contains(@class, 'font-subtitle') and @type='tel']";
  const Continue_Btn = "//button[@type='button' and contains(@class, 'bg-[linear-gradient') and contains(., 'Continue')]";
  const FruitsAndVeges='.embla__container > :nth-child(1) > a > .relative';

    beforeEach(() => {
      // Handle third-party script errors gracefully
      Cypress.on('uncaught:exception', () => false);
      cy.visit('http://www.zeptonow.com/');
    });
  
    it('Should load the Zepto homepage successfully', () => {
      // Wait for a key element to ensure the page is loaded (avoid arbitrary wait)
      cy.get('header', { timeout: 10000 }).should('be.visible');
    });
    it('Select cafe option',()=>
    {
      cy.wait(4000);
      cy.get(secondCarouselItemSelector).should('be.visible').click();
    })
    it.skip('Login to zepto',()=>
    {
      cy.wait(3000);
      cy.get(login_btn).should('be.visible').click()
      cy.wait(3000);
      cy.xpath(phone_field).click().type('7850080120');
      cy.wait(4000);
      cy.xpath(Continue_Btn).should('be.visible').click();
      cy.wait(8000);
    })
    it('Fruits and Vegitables section and buy the add the items into cart and buy it ',()=>
    {
      cy.wait(2000);
      cy.wait(3000);
      cy.get(FruitsAndVeges,{timeout:10000}).click();
      cy.wait(4000);
      cy.get('#b4827798-fcb6-4520-ba5b-0f2bd9bd7208',{timeout:10000}).click();
      cy.wait(3000);
      cy.screenshot('my-screenshot');
cy.allure().addAttachment('Screenshot', 'my-screenshot.png', 'image/png');


    })
  });
  