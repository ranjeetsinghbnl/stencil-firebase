import { newSpecPage } from '@stencil/core/testing';
import { AppSidebarMenuLinks } from '../app-sidebar-menu-links';

describe('app-sidebar-menu-links', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSidebarMenuLinks],
      html: `<app-sidebar-menu-links></app-sidebar-menu-links>`,
    });
    expect(page.root).toEqualHtml(`
      <app-sidebar-menu-links>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-sidebar-menu-links>
    `);
  });
});
