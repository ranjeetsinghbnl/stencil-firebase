import { Component, Host, h, FunctionalComponent } from '@stencil/core';
import { menus } from '../../../../util/app-url';

const ActiveTag: FunctionalComponent = () => <span class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg active-menu-tag"></span>;

@Component({
  tag: 'app-sidebar-menu-links',
  styleUrl: 'app-sidebar-menu-links.scss',
  shadow: false,
})
export class AppSidebarMenuLinks {
  anchorCss = `inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200`;
  activeAnchorCss = `text-gray-800 dark:text-gray-100 link-active`;

  render() {
    return (
      <Host>
        <ul class="mt-6">
          {menus.urls.map(menu => {
            return (
              <li class="relative px-6 py-3 dashboard-menu-links" key={menu.title}>
                {menu.url == '/' ? (
                  <stencil-route-link url={menu.url} exact={true} anchorClass={this.anchorCss} activeClass={this.activeAnchorCss}>
                    <span class="ml-4">{menu.title}</span>
                    <ActiveTag />
                  </stencil-route-link>
                ) : (
                  <stencil-route-link url={menu.url} urlMatch={menu.url} anchorClass={this.anchorCss} activeClass={this.activeAnchorCss}>
                    <span class="ml-4">{menu.title}</span>
                    <ActiveTag />
                  </stencil-route-link>
                )}
              </li>
            );
          })}
        </ul>
      </Host>
    );
  }
}
