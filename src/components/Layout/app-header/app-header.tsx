import { Component, Host, h } from '@stencil/core';
import { AppState } from '../../../store/app.store';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: false,
})
export class AppHeader {

  toggleSideMenu = () => {
    AppState.showSidebar = !AppState.showSidebar
  }

  render() {
    return (
      <Host>
        <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            {/* <!-- Mobile hamburger --> */}
            <button class="p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu" onClick={() => this.toggleSideMenu()}>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
            <app-header-search></app-header-search>
            <app-header-menu></app-header-menu>
          </div>
        </header>
      </Host >
    );
  }

}
