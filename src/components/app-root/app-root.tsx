/**
 * Component for showing application content.
 * It is the main entry point of the application
 * 
 * @component AppRoot
 */

import { Component, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AppState } from "../../store/app.store";
import { AuthService } from "../../services/auth.service";
import { appConfig } from '../../config/config';

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
  tag: 'app-root',
  styleUrl: 'app-root.scss',

})
export class AppRoot {
  /**
  * AuthService instance.
  * @name authObj
  * @type {Object}
  */
  private authObj = AuthService;

  /**
  * history instance.
  */
  @Prop() history: RouterHistory;

  /**
  * handle logout
  *
  * @returns {void}
  */
  async logout() {
    await this.authObj.logOut();
  }

  /**
  * Render component <app-root>
  *
  * @returns {void}
  */
  render() {
    if (AppState.appInit === true) {
      return (<div>Loading...</div>);
    }
    if (AppState.appInitError != '') {
      return (<app-flash-message closable={false}>{AppState.appInitError}</app-flash-message>);
    }
    const titleSuffix = ` | ${appConfig.pageTitlePrefix}`
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
    );
  }
}
