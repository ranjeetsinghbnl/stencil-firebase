/**
 * Component for showing user login.
 *
 * @component AppLogin
 */

import { Component, h, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AppState } from "../../../store/app.store";
import { AuthService } from "../../../services/auth.service";
import { httpCode, appConfig } from '../../../config/config';
import { getFormValidations } from '../../../util/util';
import { LoginRegisterSidebar } from '../../common/login-register-sidebar';

@Component({
  tag: 'app-auth-login',
  styleUrl: 'app-auth-login.scss',

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
  @State() loginError: string = "";

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
        isValid: this.formControls[controlName].validate(value)
      }
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
        this.history.push(`/`, {});
      } else {
        this.formLoader = false;
        this.loginError = loginRes.message;
      }
    }
  }

  /**
  * Render component <app-auth-login>
  *
  * @returns {void}
  */
  render() {
    if (AppState.isAuthenticated) {
      return <stencil-router-redirect url="/" />
    }
    return (
      <div class="cont">
        <stencil-route-title pageTitle={appConfig.pageTitle.login} />
        <div class="app-form register-in">
          <h2>Welcome back</h2>
          {this.loginError && <app-flash-message>{this.loginError}</app-flash-message>}
          <form onSubmit={e => this.handleLogin(e)} novalidate>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={this.formControls.email.value}
                onInput={(ev: any) => this.changeFormValue("email", ev.target.value)}
              />
              {
                (!this.formControls.email.isValid &&
                  this.submitted === true) &&
                <span class="text-danger">Please enter your email</span>
              }
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={this.formControls.password.value}
                onInput={(ev: any) => this.changeFormValue("password", ev.target.value)}
              />
              {
                (!this.formControls.password.isValid &&
                  this.submitted === true) &&
                <span class="text-danger">Please enter your password</span>
              }
            </label>
            {/* <p class="forgot-pass">Forgot password?</p> */}
            <button type="submit" class="submit-btn" disabled={this.formLoader}>{this.formLoader ? appConfig.loadingBtnTxt : 'Login'}</button>
          </form>
        </div>
        <LoginRegisterSidebar type="register"></LoginRegisterSidebar>
      </div>
    );
  }
}
