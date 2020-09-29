import { newE2EPage } from '@stencil/core/testing';

describe('app-sidebar-menu-links', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-sidebar-menu-links></app-sidebar-menu-links>');

    const element = await page.find('app-sidebar-menu-links');
    expect(element).toHaveClass('hydrated');
  });
});
