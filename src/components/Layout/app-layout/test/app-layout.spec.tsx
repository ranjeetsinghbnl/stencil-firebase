import { newSpecPage } from '@stencil/core/testing';
import { AppLayout } from '../app-layout';

describe('app-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppLayout],
      html: `<app-layout></app-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <app-layout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-layout>
    `);
  });
});
