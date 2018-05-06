import { browser, by, element } from 'protractor';
// app
import { ProtractorPage } from '../page.po';


describe('Job Page @high', () => {
  let page: ProtractorPage;

  beforeEach(() => {
    page = new ProtractorPage();
  });

  it('should display job page title', () => {
    page.navigateTo('/job');
    expect(element(by.css('.job-title')).getText()).toEqual('Job Component');
  });

  it('should navigate proprely to music page (no strategy)', () => {
    const link = element(by.css('.music-link'));
    link.click();
    expect(element(by.css('.music-title')).getText()).toEqual('Music Component');
  });

  it('should navigate proprely to music page (strategy 1)', () => {
    const link = element(by.css('.music-link'));
    link.click();
    browser.waitForAngular();
    expect(element(by.css('.music-title')).getText()).toEqual('Music Component');
  });

  it('should navigate proprely to music page (strategy 2)', () => {
    const link = element(by.css('.music-link'));
    link.click().then(function() {
      expect(element(by.css('.music-title')).getText()).toEqual('Music Component');
    });
  });
});
