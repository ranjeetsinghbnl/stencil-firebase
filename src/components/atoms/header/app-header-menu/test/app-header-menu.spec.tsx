import { newSpecPage } from '@stencil/core/testing';
import { AppHeaderMenu } from '../app-header-menu';

describe('app-header-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppHeaderMenu],
      html: `<app-header-menu></app-header-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <app-header-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-header-menu>
    `);
  });
});
