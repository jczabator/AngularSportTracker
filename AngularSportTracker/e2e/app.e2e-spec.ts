import { AngularSportTrackerPage } from './app.po';

describe('angular-sport-tracker App', () => {
  let page: AngularSportTrackerPage;

  beforeEach(() => {
    page = new AngularSportTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
