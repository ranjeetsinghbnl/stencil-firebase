import { Component, Host, h } from '@stencil/core';
import { AppState } from '../../../store/app.store';

@Component({
  tag: 'app-sidebar',
  styleUrl: 'app-sidebar.scss'
})
export class AppSidebar {

  render() {
    return (
      <Host class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <app-sidebar-d></app-sidebar-d>
        {
          AppState.showSidebar &&
          <div
            class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center">
          </div>
        }
        <app-sidebar-m></app-sidebar-m>
      </Host>
    );
  }

}
