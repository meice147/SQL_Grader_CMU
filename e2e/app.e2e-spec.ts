import { SqlGraderCMUPage } from './app.po';

describe('sql-grader-cmu App', () => {
  let page: SqlGraderCMUPage;

  beforeEach(() => {
    page = new SqlGraderCMUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
