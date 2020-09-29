import { newE2EPage } from '@stencil/core/testing';

describe('app-header-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-header-search></app-header-search>');

    const element = await page.find('app-header-search');
    expect(element).toHaveClass('hydrated');
  });
});
