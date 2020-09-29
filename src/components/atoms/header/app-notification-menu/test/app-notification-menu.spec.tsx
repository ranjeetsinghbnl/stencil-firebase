import { newSpecPage } from '@stencil/core/testing';
import { AppNotificationMenu } from '../app-notification-menu';

describe('app-notification-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppNotificationMenu],
      html: `<app-notification-menu></app-notification-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <app-notification-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-notification-menu>
    `);
  });
});
