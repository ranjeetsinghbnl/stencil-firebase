import { newSpecPage } from '@stencil/core/testing';
import { AppSidebarM } from '../app-sidebar-m';

describe('app-sidebar-m', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSidebarM],
      html: `<app-sidebar-m></app-sidebar-m>`,
    });
    expect(page.root).toEqualHtml(`
      <app-sidebar-m>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-sidebar-m>
    `);
  });
});
