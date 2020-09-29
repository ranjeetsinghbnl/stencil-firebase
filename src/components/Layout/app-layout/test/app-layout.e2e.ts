import { newE2EPage } from '@stencil/core/testing';

describe('app-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-layout></app-layout>');

    const element = await page.find('app-layout');
    expect(element).toHaveClass('hydrated');
  });
});
