import { newE2EPage } from '@stencil/core/testing';

describe('app-notification-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-notification-menu></app-notification-menu>');

    const element = await page.find('app-notification-menu');
    expect(element).toHaveClass('hydrated');
  });
});
