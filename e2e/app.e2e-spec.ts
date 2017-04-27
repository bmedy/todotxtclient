import { TodotxtclientPage } from './app.po';

describe('todotxtclient App', () => {
  let page: TodotxtclientPage;

  beforeEach(() => {
    page = new TodotxtclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
