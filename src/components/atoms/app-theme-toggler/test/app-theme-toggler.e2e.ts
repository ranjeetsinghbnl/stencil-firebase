import { newE2EPage } from '@stencil/core/testing';

describe('app-theme-toggler', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-theme-toggler></app-theme-toggler>');

    const element = await page.find('app-theme-toggler');
    expect(element).toHaveClass('hydrated');
  });
});
