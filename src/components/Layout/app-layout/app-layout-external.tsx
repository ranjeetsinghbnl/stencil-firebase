import { Component, Host, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AppState } from "../../../store/app.store";
import { appConfig } from '../../../config/config';
import { appUrl } from '../../../util/app-url';

@Component({
  tag: 'app-layout-external'
})
export class AppLayoutExternal {

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
    // Redirect to dashboard if user is already login
    if (AppState.isAuthenticated) {
      return <stencil-router-redirect url={appUrl.root} />
    }
    const titleSuffix = ` | ${appConfig.pageTitlePrefix}`;
    return (
      <Host>
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <stencil-router titleSuffix={titleSuffix}>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url={appUrl.login} component='app-auth-login' />
                <stencil-route url={appUrl.forgotPassword} component='app-auth-register' />
                <stencil-route url={appUrl.register} component='app-auth-register' />
                <stencil-route component="app-auth-login" />
              </stencil-route-switch>
            </stencil-router>
          </div>
        </div>
      </Host>
    );
  }

}
