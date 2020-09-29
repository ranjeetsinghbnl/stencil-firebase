import { newSpecPage } from '@stencil/core/testing';
import { AppSidebarD } from '../app-sidebar-d';

describe('app-sidebar-d', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSidebarD],
      html: `<app-sidebar-d></app-sidebar-d>`,
    });
    expect(page.root).toEqualHtml(`
      <app-sidebar-d>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-sidebar-d>
    `);
  });
});
