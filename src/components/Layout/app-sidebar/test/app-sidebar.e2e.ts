import { newE2EPage } from '@stencil/core/testing';

describe('app-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-sidebar></app-sidebar>');

    const element = await page.find('app-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
