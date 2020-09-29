import { newE2EPage } from '@stencil/core/testing';

describe('app-sidebar-d', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-sidebar-d></app-sidebar-d>');

    const element = await page.find('app-sidebar-d');
    expect(element).toHaveClass('hydrated');
  });
});
