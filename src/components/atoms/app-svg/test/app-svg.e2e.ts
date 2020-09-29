import { newE2EPage } from '@stencil/core/testing';

describe('app-svg', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-svg></app-svg>');

    const element = await page.find('app-svg');
    expect(element).toHaveClass('hydrated');
  });
});
