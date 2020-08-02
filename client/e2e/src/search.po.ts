import { protractor, browser, by, element, $, $$ } from 'protractor';

export class SearchPage {
  performSearch(minimalPrice: number, maximumPrice: number) {
    const searchOnToolbar = element(by.id('search'));
    searchOnToolbar.click();

    const minPrice = $('input[formControlName="minPrice"]');
    const maxPrice = $('input[formControlName="maxPrice"]');

    minPrice.sendKeys(minimalPrice);
    maxPrice.sendKeys(maximumPrice);

    const searchOnForm = element(by.buttonText('SZUKAJ'));

    searchOnForm.click();

    const EC = protractor.ExpectedConditions;
    const urlChange = EC.urlContains('/search');
    browser.wait(urlChange, 5000, 'Adres URL powinien zawierać /search');
  }

  navigateToLandingPage() {
    return browser.get('/');
  }

  getFirstProductPrice() {
    return $$('span[class="tile__price-tag"]')
      .first()
      .getText()
      .then((value) => {
        return parseInt(value.replace('$', ''), 10);
      });
  }

  waitForUrlTocontain(
    urlSegment: string,
    timeout: number,
    timeoutMessage: string
  ) {
    return browser.wait(
      () => {
        return browser.getCurrentUrl().then((url) => {
          const regex = new RegExp(urlSegment);
          return regex.test(url);
        });
      },
      timeout,
      timeoutMessage
    );
  }
}
