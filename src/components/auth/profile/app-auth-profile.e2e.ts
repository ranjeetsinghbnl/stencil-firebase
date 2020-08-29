import { newE2EPage } from '@stencil/core/testing';

describe('app-auth-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-auth-profile></app-auth-profile>');

    const element = await page.find('app-auth-profile');
    expect(element).toHaveClass('hydrated');
  });
});
