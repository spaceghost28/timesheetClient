import { TimesheetClientPage } from './app.po';

describe('timesheet-client App', function() {
  let page: TimesheetClientPage;

  beforeEach(() => {
    page = new TimesheetClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
