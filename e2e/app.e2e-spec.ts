import { BasketPage } from './app.po';

describe('basket App', function() {
  let page: BasketPage;

  beforeEach(() => {
    page = new BasketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
