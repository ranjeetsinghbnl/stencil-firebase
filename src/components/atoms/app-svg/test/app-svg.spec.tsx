import { newSpecPage } from '@stencil/core/testing';
import { AppSvg } from '../app-svg';

describe('app-svg', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSvg],
      html: `<app-svg></app-svg>`,
    });
    expect(page.root).toEqualHtml(`
      <app-svg>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-svg>
    `);
  });
});
