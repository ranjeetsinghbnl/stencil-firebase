/**
 * Component for showing user register.
 *
 * @component AppAuthRegister
 */

import { Component, State, h, Prop, getAssetPath } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AuthService } from '../../../services/auth.service';
import { httpCode, appConfig } from '../../../config/config';
import { errorClass, getFormValidations, inputClass } from '../../../util/util';
import { LoginRegisterSidebar } from '../../shared/login-register-sidebar';
import { appUrl } from '../../../util/app-url';

@Component({
  tag: 'app-auth-register',
  styleUrl: 'app-auth-register.scss',
  assetsDirs: ['assets'],
})
export class AppAuthRegister {
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
   */
  @State() formControls = getFormValidations('register');

  /**
   * Form submission state
   */
  @State() submitted = false;

  /**
   * Form loading state
   */
  @State() formLoader = false;

  /**
   * Form error state
   */
  @State() registerError: string = '';

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
   * Handle register form
   * Save user in firebase and update username
   * Redirect user to dashboard
   * @param   {event} e Form submit event
   *
   * @returns {void}
   */
  async handleRegister(e) {
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
      this.registerError = '';
      const registerRes = await this.authObj.register({ email: this.formControls.email.value, password: this.formControls.password.value });
      if (registerRes.status == httpCode.success) {
        await this.authObj.updateProfile(this.formControls.name.value);
        this.history.push(appUrl.root, {});
      } else {
        this.registerError = registerRes.message;
        this.formLoader = false;
      }
    }
  }

  /**
   * Render component <app-auth-register>
   *
   * @returns {void}
   */
  render() {
    return (
      <div class="flex flex-col overflow-y-auto md:flex-row">
        <stencil-route-title pageTitle={appConfig.pageTitle.register} />
        <div class="h-32 md:h-auto md:w-1/2">
          <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" src={getAssetPath('./assets/create-account-office.jpeg')} alt="Office" />
          <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" src={getAssetPath('./assets/create-account-office-dark.jpeg')} alt="Office" />
        </div>
        <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <form onSubmit={e => this.handleRegister(e)} novalidate>
              <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">{appConfig.pageTitle.register}</h1>
              <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Name</span>
                <input
                  class={`${inputClass} ${!this.formControls.name.isValid && this.submitted === true ? errorClass : ''}`}
                  placeholder="John Dev"
                  type="text"
                  name="name"
                  min={3}
                  max={50}
                  value={this.formControls.name.value}
                  onInput={(ev: any) => this.changeFormValue('name', ev.target.value)}
                  required={true}
                />
                {!this.formControls.email.isValid && this.submitted === true && <span class="text-xs text-red-600 dark:text-red-400">Please enter your email</span>}
              </label>
              <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Email</span>
                <input
                  class={`${inputClass} ${!this.formControls.email.isValid && this.submitted === true ? errorClass : ''}`}
                  placeholder="name@email.com"
                  type="email"
                  name="email"
                  max={60}
                  value={this.formControls.email.value}
                  onInput={(ev: any) => this.changeFormValue('email', ev.target.value)}
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
                  max={18}
                  value={this.formControls.password.value}
                  onInput={(ev: any) => this.changeFormValue('password', ev.target.value)}
                  required={true}
                />
                {!this.formControls.password.isValid && this.submitted === true && <span class="text-xs text-red-600 dark:text-red-400">Please enter your password</span>}
              </label>
              <div class="flex mt-6 text-sm">
                <label class="flex items-center dark:text-gray-400">
                  <input
                    type="checkbox"
                    class={`
                      text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray
                      ${!this.formControls.terms_agree.isValid && this.submitted === true ? errorClass : ''}
                      `}
                    checked={this.formControls.terms_agree.value}
                    onChange={() => this.changeFormValue('terms_agree', !this.formControls.terms_agree.value)}
                    required={true}
                  />
                  <span class="ml-2">
                    I agree to the &nbsp;
                    <stencil-route-link url={appUrl.pages.privacyPolicy}>
                      <span class="underline">privacy policy</span>
                    </stencil-route-link>
                  </span>
                </label>
              </div>
              {!this.formControls.terms_agree.isValid && this.submitted === true && (
                <span class="text-xs text-red-600 dark:text-red-400 w-full">Please agree to terms & condition</span>
              )}
              {this.registerError && <app-flash-message type="error">{this.registerError}</app-flash-message>}
              <button
                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                type="submit"
                disabled={this.formLoader}
              >
                {this.formLoader ? appConfig.loadingBtnTxt : appConfig.pageTitle.register}
              </button>
            </form>
            <LoginRegisterSidebar type="register"></LoginRegisterSidebar>
          </div>
        </div>
      </div>
    );
  }
}
