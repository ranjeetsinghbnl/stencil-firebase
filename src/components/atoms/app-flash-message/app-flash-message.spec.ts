import { newSpecPage } from '@stencil/core/testing';
import { AppFlashMessage } from './app-flash-message';

describe('app-flash-message', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AppFlashMessage],
      html: `<app-flash-message type="success" show closable>This is a Test success message</app-flash-message>`,
    });
    console.log(root.innerHTML, 'root');
    expect(root).toEqualHtml(`
      <app-flash-message type="success" show closable>
        <div class="app-alert success" role="alert" aria-hidden="false">
          <span class="app-close-btn">&times;</span>
          This is a Test success message
        </div>
      </app-flash-message>
    `);
  });

  it('renders with error type', async () => {
    const { root } = await newSpecPage({
      components: [AppFlashMessage],
      html: `<app-flash-message type="error" closable="false" show="true">This is a Test success message</app-flash-message>`,
    });
    expect(root).toEqualHtml(`
      <app-flash-message type="error" closable="false" show="true">
        <div class="app-alert error" role="alert" aria-hidden="false">
          This is a Test success message
        </div>
      </app-flash-message>
    `);
  });

  it('should be hide', async () => {
    const { root } = await newSpecPage({
      components: [AppFlashMessage],
      html: `<app-flash-message type="error" closable="false" show="false">This is a Test success message</app-flash-message>`,
    });
    expect(root).toEqualHtml(`
      <app-flash-message type="error" closable="false" show="false">
        <div class="app-alert error hidden" role="alert" aria-hidden="true">
          This is a Test success message
        </div>
      </app-flash-message>
    `);
  });
});
