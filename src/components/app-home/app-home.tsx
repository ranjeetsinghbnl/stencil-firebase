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
      <app-page-container>
        <stencil-route-title pageTitle={appConfig.pageTitle.dashboard} />
        <h3 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Hi <span class="user-name">{AppState.user ? AppState.user.displayName : null}</span>,
        </h3>
        <br />
        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div class="text-sm text-gray-600 dark:text-gray-400">
            <h3>Welcome to the {appConfig.name} dashboard.</h3>
            <br />
            <h4>This app demonstrate Login, Register, logout features using Firebase + Stencil + Stencil Store as state management tool.</h4>
            <h4>You can read more about the technologies used here</h4>
            <ol>
              <li>
                <a href="https://github.com/ionic-team/stencil" target="_blank">
                  Stencil
                </a>
              </li>
              <li>
                <a href="https://stenciljs.com/docs/stencil-store" target="_blank">
                  Stencil Store
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com" target="_blank">
                  Firebase
                </a>
              </li>
            </ol>

            <p>
              <stencil-route-link url="/profile" anchorClass="profile-links">
                Edit Profile
              </stencil-route-link>
            </p>
          </div>
        </div>
      </app-page-container>
    );
  }
}
