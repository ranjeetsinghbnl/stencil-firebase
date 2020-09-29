/**
 * Functional Component for showing sidebar on register and login page.
 *
 * @component LoginRegisterSidebar
 */

import { FunctionalComponent, h } from '@stencil/core';
import { appUrl } from '../../util/app-url';
interface FunctionalComponentProps {
  type: string;
}
export const LoginRegisterSidebar: FunctionalComponent<FunctionalComponentProps> = ({ type }) => [
  <div>
    {/* <hr class="my-8" />
    <button
      class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
    >
      <app-svg type="Github"></app-svg>
      Github
    </button>
    <button
      class="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
    >
      <app-svg type="Twitter"></app-svg>
      Twitter
    </button> */}
    {
      type == 'login' ? (
        <span class="w-full">
          {/* <p class="mt-4">
            <stencil-route-link url={appUrl.forgotPassword} anchorClass="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
              Forgot your password?
          </stencil-route-link>
          </p> */}
          <p class="mt-1">
            <stencil-route-link url={appUrl.register} anchorClass="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
              Create account
          </stencil-route-link>
          </p>
        </span>
      )
        :
        ''
    }
    {
      type == 'register' ? (
        <p class="mt-4">
          <stencil-route-link url={appUrl.login} anchorClass="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
            Already have an account? Login
          </stencil-route-link>
        </p>
      )
        :
        ''
    }
  </div>
];