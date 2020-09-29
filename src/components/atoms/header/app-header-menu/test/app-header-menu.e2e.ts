import { newE2EPage } from '@stencil/core/testing';

describe('app-header-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-header-menu></app-header-menu>');

    const element = await page.find('app-header-menu');
    expect(element).toHaveClass('hydrated');
  });
});
