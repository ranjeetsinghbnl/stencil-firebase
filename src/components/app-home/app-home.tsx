/**
 * Component for showing user dashboard after login.
 *
 * @component AppHome
 */

import { Component, h } from '@stencil/core';
import { AppState } from '../../store/app.store';
import { appConfig } from '../../config/config';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',

})
export class AppHome {

  /**
  * Render component <app-home>
  *
  * @returns {void}
  */
  render() {
    return (
      <div class='app-home'>
        <stencil-route-title pageTitle={appConfig.pageTitle.dashboard} />
        <h3>Hi <span class="user-name">{AppState.user ? AppState.user.displayName : null}</span>,</h3><br />
        <h3>Welcome to the {appConfig.name} dashboard.</h3><br />
        <h4>This app demonstrate Login, Register, logout features using Firebase + Stencil + Stencil Store as state management tool.</h4>
        <h4>You can read more about the technologies used here</h4>
        <ol>
          <li><a href="https://github.com/ionic-team/stencil" target="_blank">Stencil</a></li>
          <li><a href="https://stenciljs.com/docs/stencil-store" target="_blank">Stencil Store</a></li>
          <li><a href="https://firebase.google.com" target="_blank">Firebase</a></li>
        </ol>

        <p><stencil-route-link url='/profile' anchorClass="profile-links">
          Edit Profile
        </stencil-route-link>
        </p>
      </div >
    );
  }
}
