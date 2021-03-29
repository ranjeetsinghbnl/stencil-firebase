/**
 * Component for showing user login.
 *
 * @component AppLogin
 */

import { Component, h, Prop, State, getAssetPath } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AuthService } from '../../../services/auth.service';
import { httpCode, appConfig } from '../../../config/config';
import { errorClass, getFormValidations, inputClass } from '../../../util/util';
import { LoginRegisterSidebar } from '../../shared/login-register-sidebar';
import { appUrl } from '../../../util/app-url';

@Component({
  tag: 'app-auth-login',
  styleUrl: 'app-auth-login.scss',
  assetsDirs: ['assets'],
})
export class AppLogin {
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
   * Register form inputs and validations
   * @name formControls
   * @type {Object}
   */
  @State() formControls = getFormValidations('login');

  /**
   * Form submission state
   * @name submitted
   * @type {boolean}
   */
  @State() submitted = false;

  /**
   * Form loading state
   * @name formLoader
   * @type {boolean}
   */
  @State() formLoader = false;

  /**
   * Form error state
   * @name loginError
   * @type {string}
   */
  @State() loginError: string = '';

  /**
   * handle form values and do the validation work
   * @param   {string} controlName Control name for register form
   * @param   {any} value          Control value for register form
   *
   * @returns {void}
   */
  changeFormValue(controlName, value) {
    this.formControls = {
      ...this.formControls,
      [controlName]: {
        ...this.formControls[controlName],
        value: value,
        isValid: this.formControls[controlName].validate(value),
      },
    };
  }

  /**
   * Handle login form
   * Check user in firebase
   * Redirect user to dashboard
   * @param   {event} e Form submit event
   *
   * @returns {void}
   */
  async handleLogin(e) {
    e.preventDefault();
    this.submitted = true;
    let isFormValid = true;
    //Run all validation functions
    for (let controlName in this.formControls) {
      let control = this.formControls[controlName];
      control.validate(control.value);
      if (!control.isValid) {
        isFormValid = false;
      }
    }
    if (isFormValid) {
      this.formLoader = true;
      this.loginError = '';
      const loginRes = await this.authObj.login({ email: this.formControls.email.value, password: this.formControls.password.value });
      if (loginRes.status == httpCode.success) {
        this.formLoader = false;
        this.history.push(appUrl.root, {});
      } else {
        this.formLoader = false;
        this.loginError = loginRes.message;
        this.formControls.password.value = null;
      }
    }
  }

  /**
   * Render component <app-auth-login>
   *
   * @returns {void}
   */
  render() {
    return (
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <stencil-route-title pageTitle={appConfig.pageTitle.login} />
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src={getAssetPath('./assets/login-office.jpeg')} alt="Office" />
          <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src={getAssetPath('./assets/login-office-dark.jpeg')} alt="Office" />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">{appConfig.pageTitle.login}</h1>
            <form onSubmit={e => this.handleLogin(e)} novalidate>
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  class={`${inputClass} ${!this.formControls.email.isValid && this.submitted === true ? errorClass : ''}`}
                  placeholder="name@email.com"
                  type="email"
                  name="email"
                  min={3}
                  max={50}
                  value={this.formControls.email.value}
                  onInput={(ev: any) => this.changeFormValue('email', ev.target.value)}
                  required={true}
                />
                {!this.formControls.email.isValid && this.submitted === true && <span class="text-xs text-red-600 dark:text-red-400">Please enter your email</span>}
              </label>
              <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Password</span>
                <input
                  class={`${inputClass} ${!this.formControls.password.isValid && this.submitted === true ? errorClass : ''}`}
                  placeholder="***************"
                  type="password"
                  name="password"
                  value={this.formControls.password.value}
                  onInput={(ev: any) => this.changeFormValue('password', ev.target.value)}
                  required={true}
                />
                {!this.formControls.password.isValid && this.submitted === true && <span class="text-xs text-red-600 dark:text-red-400">Please enter your password</span>}
              </label>
              {this.loginError && <app-flash-message type="error">{this.loginError}</app-flash-message>}
              <button
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                type="submit"
                disabled={this.formLoader}
              >
                {this.formLoader ? appConfig.loadingBtnTxt : 'Log in'}
              </button>
            </form>
            <LoginRegisterSidebar type="login"></LoginRegisterSidebar>
          </div>
        </div>
      </div>
    );
  }
}
