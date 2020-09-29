import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-header-menu',
  styleUrl: 'app-header-menu.scss'
})
export class AppHeaderMenu {

  render() {
    return (
      <Host>
        <ul class="flex items-center flex-shrink-0 space-x-6">
          <li class="flex">
            <app-theme-toggler></app-theme-toggler>
          </li>
          <li class="relative">
            <app-notification-menu></app-notification-menu>
          </li>
          <li class="relative">
            <app-profile-menu></app-profile-menu>
          </li>
        </ul>
      </Host>
    );
  }

}
