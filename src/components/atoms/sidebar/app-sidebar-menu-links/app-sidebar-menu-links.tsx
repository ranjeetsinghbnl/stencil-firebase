import { Component, Host, h } from '@stencil/core';
import { menus } from '../../../../util/app-url';
import { checkActiveUrl } from '../../../../util/util';

@Component({
  tag: 'app-sidebar-menu-links',
  styleUrl: 'app-sidebar-menu-links.scss',
  shadow: false,
})
export class AppSidebarMenuLinks {

  render() {
    const anchorCss = 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200';
    const activeAnchorCss = 'inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100';
    return (
      <Host>
        <ul class="mt-6">
          {
            menus.urls.map((menu) => {
              let isActive = false;
              isActive = checkActiveUrl(menu.url) ? true : false;
              return (
                <li class="relative px-6 py-3" key={menu.title}>
                  {isActive
                    ?
                    <span
                      class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                    : ''
                  }
                  <stencil-route-link
                    url={menu.url}
                    anchorClass={isActive ? activeAnchorCss : anchorCss}>
                    <span class="ml-4">{menu.title}</span>
                  </stencil-route-link>
                </li>
              )
            })
          }
        </ul>
      </Host>
    );
  }

}
