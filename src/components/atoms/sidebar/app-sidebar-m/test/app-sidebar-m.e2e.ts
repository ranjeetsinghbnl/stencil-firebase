import { newE2EPage } from '@stencil/core/testing';

describe('app-sidebar-m', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-sidebar-m></app-sidebar-m>');

    const element = await page.find('app-sidebar-m');
    expect(element).toHaveClass('hydrated');
  });
});
