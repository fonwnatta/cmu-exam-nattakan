import { SiprosClientPage } from './app.po';

describe('sipros-client App', () => {
  let page: SiprosClientPage;

  beforeEach(() => {
    page = new SiprosClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
