import { Component, Host, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AppState } from "../../../store/app.store";
import { appConfig } from '../../../config/config';
import { appUrl } from '../../../util/app-url';

/**
 * Handle private routes
 * Routes that can't be accessed until user logs in
 * Functional component
 * @param   {string} component name
 * @param   {object} props name
 *
 * @returns {Object} 
 */
const PrivateRoute = ({ component, ...props }: { [key: string]: any }) => {
  const Component = component;

  return (
    <stencil-route {...props} routeRender={
      (props: { [key: string]: any }) => {
        if (AppState.isAuthenticated) {
          return <Component {...props} {...props.componentProps}></Component>;
        }
        return <stencil-router-redirect url="/login"></stencil-router-redirect>
      }
    } />
  );
}

@Component({
  tag: 'app-layout-internal'
})
export class AppLayoutInternal {
  /**
  * history instance.
  */
  @Prop() history: RouterHistory;


  render() {
    if (AppState.appInit === true) {
      return (<div>Loading...</div>);
    }
    if (AppState.appInitError != '') {
      return (<app-flash-message type="error" closable={false}>{AppState.appInitError}</app-flash-message>);
    }
    // Only allowed access is app session is available
    if (!AppState.isAuthenticated) {
      return <stencil-router-redirect url={appUrl.login} />
    }
    const titleSuffix = ` | ${appConfig.pageTitlePrefix}`;
    return (
      <Host>
        <div class={`flex h-screen bg-gray-50 dark:bg-gray-900 ${AppState.showSidebar ? 'overflow-hidden' : ''}`}>
          <app-sidebar></app-sidebar>
          <div class="flex flex-col flex-1">
            <app-header></app-header>
            <main class="h-full pb-16 overflow-y-auto">
              <stencil-router titleSuffix={titleSuffix}>
                <stencil-route-switch scrollTopOffset={0}>
                  <PrivateRoute url={appUrl.root} component="app-home" exact={true} />
                  <PrivateRoute url={appUrl.profile} component="app-auth-profile" />
                  <stencil-route component="app-home" />
                </stencil-route-switch>
              </stencil-router>
            </main>
          </div>
        </div>
      </Host>
    );
  }

}
