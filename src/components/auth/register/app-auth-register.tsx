/**
 * Component for showing user register.
 *
 * @component AppAuthRegister
 */

import { Component, State, h, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { AuthService } from "../../../services/auth.service";
import { AppState } from '../../../store/app.store';
import { httpCode, appConfig } from '../../../config/config';
import { getFormValidations } from '../../../util/util';
import { LoginRegisterSidebar } from '../../common/login-register-sidebar';

@Component({
  tag: 'app-auth-register',
  styleUrl: 'app-auth-register.scss'
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
        isValid: this.formControls[controlName].validate(value)
      }
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
      this.formLoader = true
      this.registerError = '';
      const registerRes = await this.authObj.register({ email: this.formControls.email.value, password: this.formControls.password.value });
      if (registerRes.status == httpCode.success) {
        await this.authObj.updateProfile(this.formControls.name.value);
        this.history.push(`/`, {});
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
    if (AppState.isAuthenticated) {
      return <stencil-router-redirect url="/" />
    }
    return (
      <div class="cont">
        <stencil-route-title pageTitle={appConfig.pageTitle.register} />
        <div class="app-form register-in">
          <h2>Time to feel like home</h2>
          {this.registerError && <app-flash-message>{this.registerError}</app-flash-message>}
          <form onSubmit={e => this.handleRegister(e)} novalidate>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={this.formControls.name.value}
                onInput={(ev: any) => this.changeFormValue("name", ev.target.value)}
              />
              {
                (!this.formControls.name.isValid &&
                  this.submitted === true) &&
                <span class="text-danger">Please enter your name</span>
              }
            </label>
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
            <button type="submit" class="submit-btn" disabled={this.formLoader}>{this.formLoader ? appConfig.loadingBtnTxt : 'Register'}</button>
          </form>
        </div>
        <LoginRegisterSidebar type="login"></LoginRegisterSidebar>
      </div>
    );
  }
}
