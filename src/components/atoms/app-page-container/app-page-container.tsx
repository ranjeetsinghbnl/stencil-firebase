import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-page-container',
  styleUrl: 'app-page-container.scss',
})
export class AppPageContainer {
  render() {
    return (
      <div class="container px-6 mx-auto grid">
        <slot />
      </div>
    );
  }
}
