import { DigisoftPage } from './app.po';

describe('digisoft App', function() {
  let page: DigisoftPage;

  beforeEach(() => {
    page = new DigisoftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
