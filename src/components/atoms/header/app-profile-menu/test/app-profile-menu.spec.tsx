import { newSpecPage } from '@stencil/core/testing';
import { AppProfileMenu } from '../app-profile-menu';

describe('app-profile-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppProfileMenu],
      html: `<app-profile-menu></app-profile-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <app-profile-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-profile-menu>
    `);
  });
});
