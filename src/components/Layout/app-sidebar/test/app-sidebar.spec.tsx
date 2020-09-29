import { newSpecPage } from '@stencil/core/testing';
import { AppSidebar } from '../app-sidebar';

describe('app-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSidebar],
      html: `<app-sidebar></app-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <app-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-sidebar>
    `);
  });
});
