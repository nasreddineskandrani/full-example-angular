import { browser, by, element } from 'protractor';

export class ProtractorPage {
  navigateTo(url) {
    return browser.get(url);
  }
}
