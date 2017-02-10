import { NileWebappPage } from './app.po';

describe('nile-webapp App', function() {
  let page: NileWebappPage;

  beforeEach(() => {
    page = new NileWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
