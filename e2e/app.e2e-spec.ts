import { NgReimbursementPage } from './app.po';

describe('ng-reimbursement App', function() {
  let page: NgReimbursementPage;

  beforeEach(() => {
    page = new NgReimbursementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
