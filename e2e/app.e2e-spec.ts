import { BenisTaxiNgPage } from './app.po';

describe('benis-taxi-ng App', function() {
  let page: BenisTaxiNgPage;

  beforeEach(() => {
    page = new BenisTaxiNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
