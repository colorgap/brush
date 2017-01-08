import { BowyerPage } from './app.po';

describe('bowyer App', function() {
  let page: BowyerPage;

  beforeEach(() => {
    page = new BowyerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
