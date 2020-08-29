/**
 * Functional Component for showing sidebar on register and login page.
 *
 * @component LoginRegisterSidebar
 */

import { FunctionalComponent, h } from '@stencil/core';
interface FunctionalComponentProps {
  type: string;
}
export const LoginRegisterSidebar: FunctionalComponent<FunctionalComponentProps> = ({ type }) => [
  <div class="sub-cont">
    <div class="img">
      {
        type != 'login' ?
          <div class="img__text m--up">
            <h2>New here?</h2>
            <p>Register and discover great amount of new opportunities!</p>
          </div>
          :
          <div class="img__text m--up">
            <h2>One of us?</h2>
            <p>If you already has an account, just login. We've missed you!</p>
          </div>
      }
      <div class="img__btn">
        {
          type != 'login' ?
            <stencil-route-link url='/register' anchorClass="m--up">
              <button>Register</button>
            </stencil-route-link>
            :
            <div class="img__btn">
              <stencil-route-link url='/login' anchorClass="m--up">
                <button>Login</button>
              </stencil-route-link>
            </div>
        }
      </div>
    </div>
  </div>
];