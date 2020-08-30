/**
 * Component for showing user profile.
 *
 * @component AppAuthProfile
 */

import { Component, h, State } from '@stencil/core';
import { AuthService } from '../../../services/auth.service';
import { AppState } from "../../../store/app.store";
import { appConfig, httpCode } from '../../../config/config';
import { getFormValidations } from '../../../util/util';

@Component({
  tag: 'app-auth-profile',
  styleUrl: 'app-auth-profile.scss'
})
export class AppAuthProfile {

  /**
  * AuthService instance.
  * @name authObj
  * @type {Object}
  */
  private authObj = AuthService;

  /**
  * Register form inputs and validations
  */
  @State() formControls = getFormValidations('updateProfile', { name: AppState.user ? AppState.user.displayName : null });

  /**
  * Form submission state
  */
  @State() submitted = false;

  /**
  * Form error state
  */
  @State() formError: string = '';

  /**
  * Form loading state
  */
  @State() updateLoader: boolean = false;


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
  * Handle firebase update profile operation
  * @param   {event} e Form submit event
  *
  * @returns {void}
  */
  async handleProfile(e) {
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
      this.updateLoader = true
      const result = await this.authObj.updateProfile(this.formControls.name.value);
      if (result.status != httpCode.success) {
        this.formError = result.message;
      }
      this.updateLoader = false;
    }
  }

  /**
  * Render component <app-auth-profile>
  *
  * @returns {void}
  */
  render() {
    return (
      <div class="cont login-view">
        <stencil-route-title pageTitle={appConfig.pageTitle.profile} />
        <div class="app-form register-in">
          <h2>Update Profile</h2>
          {this.formError && <app-flash-message>{this.formError}</app-flash-message>}
          <form onSubmit={e => this.handleProfile(e)} novalidate>
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
            <button type="submit" class="submit-btn" disabled={this.updateLoader}>{this.updateLoader ? appConfig.loadingBtnTxt : 'Update Profile'}</button>
          </form>
        </div>
      </div>
    );
  }
}
