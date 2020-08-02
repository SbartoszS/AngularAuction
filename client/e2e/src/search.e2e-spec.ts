import { SearchPage } from './search.po';
import { browser } from 'protractor';

describe('Wyszukiwanie ngAuction', () => {
  let searchPage: SearchPage;

  beforeEach(() => {
    searchPage = new SearchPage();
  });

  it('powinno przeprowadzać wyszukiwanie produków z przedziału cenowego od 10 do 100 dolarów', async () => {
    searchPage.navigateToLandingPage();
    let url = await browser.getCurrentUrl();
    expect(url).toContain('/categories/wszystkie%20produkty');

    searchPage.performSearch(10, 100);
    url = await browser.getCurrentUrl();
    expect(url).toContain('/search-results?minPrice=10&maxPrice=100');

    const firstProductPrice = await searchPage.getFirstProductPrice();
    expect(firstProductPrice).toBeGreaterThan(10);
    expect(firstProductPrice).toBeLessThan(100);
  });
});
