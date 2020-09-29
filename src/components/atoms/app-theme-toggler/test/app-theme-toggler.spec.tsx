import { newSpecPage } from '@stencil/core/testing';
import { AppThemeToggler } from '../app-theme-toggler';

describe('app-theme-toggler', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppThemeToggler],
      html: `<app-theme-toggler></app-theme-toggler>`,
    });
    expect(page.root).toEqualHtml(`
      <app-theme-toggler>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-theme-toggler>
    `);
  });
});
