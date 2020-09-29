import { newSpecPage } from '@stencil/core/testing';
import { AppHeaderSearch } from '../app-header-search';

describe('app-header-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppHeaderSearch],
      html: `<app-header-search></app-header-search>`,
    });
    expect(page.root).toEqualHtml(`
      <app-header-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-header-search>
    `);
  });
});
