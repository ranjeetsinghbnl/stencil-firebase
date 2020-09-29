import { newE2EPage } from '@stencil/core/testing';

describe('app-profile-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-profile-menu></app-profile-menu>');

    const element = await page.find('app-profile-menu');
    expect(element).toHaveClass('hydrated');
  });
});
