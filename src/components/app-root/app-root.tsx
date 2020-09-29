/**
 * Component for showing application content.
 * It is the main entry point of the application
 * 
 * @component AppRoot
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',

})
export class AppRoot {

  /**
  * Render component <app-root>
  *
  * @returns {void}
  */
  render() {
    return (
      <app-layout></app-layout>
    );
    /*const titleSuffix = ` | ${appConfig.pageTitlePrefix}`
    return (
      <div>
        {
          AppState.isAuthenticated &&
          <header>
            <div class="wd-50">
              <h1>
                <stencil-route-link url='/'>
                  {appConfig.name}
                </stencil-route-link>
              </h1>
            </div>
            {
              AppState.user
              && (
                <div class="wd-50 right pdr-5"><span class="nav-user">{AppState.user.displayName}</span> <span><a class="type-a" href="javascript:void(0);" onClick={() => this.logout()}>Logout</a></span></div>
              )
            }
          </header>
        }
        <main>
          <stencil-router titleSuffix={titleSuffix}>
            <stencil-route-switch scrollTopOffset={0}>
              <PrivateRoute url="/" component="app-home" exact={true} />
              <PrivateRoute url="/profile" component="app-auth-profile" />
              <stencil-route url='/login' component='app-auth-login' />
              <stencil-route url='/register' component='app-auth-register' />
              <stencil-route component="app-page-home" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );*/
  }
}
