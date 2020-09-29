import { Component, Host, h } from '@stencil/core';
import { appUrl } from '../../../../util/app-url';

@Component({
  tag: 'app-sidebar-d',
  styleUrl: 'app-sidebar-d.scss'
})
export class AppSidebarD {

  render() {

    return (
      <Host class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <aside>
          <div class="py-4 text-gray-500 dark:text-gray-400">
            <stencil-route-link
              url={appUrl.root}
              anchorClass="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
              Windmill
            </stencil-route-link>
            <app-sidebar-menu-links></app-sidebar-menu-links>
          </div>
        </aside >
      </Host>
    );
  }

}
