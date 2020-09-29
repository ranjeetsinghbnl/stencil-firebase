/**
 * Component for showing flash messages.
 *
 * @component AppFlashMessage
 */

import { Component, h, Prop, Watch } from '@stencil/core';


@Component({
  tag: 'app-flash-message',
  styleUrl: 'app-flash-message.scss'
})
export class AppFlashMessage {

  /**
  * Message type
  */
  @Prop({ reflect: true }) type: string = '';

  /** 
   * alert closable. 
  */
  @Prop({ reflect: true }) closable: boolean = true;

  /**
  * Show/hide alert message
  */
  @Prop({ mutable: true, reflect: true }) show: boolean = true;

  @Watch('show')
  handleShowChange() {
    if (this.show === false) {
      this.hideMsg();
    } else {
      this.showMsg();
    }
  }

  /**
  * Hide message
  *
  * @returns {(null | void)}
  */
  async hideMsg() {
    if (!this.show) {
      return null;
    }
    this.show = false;
  }

  /**
  * Show message
  *
  * @returns {(null | void)}
  */
  async showMsg() {
    if (this.show) {
      return null;
    }
    this.show = true;
  }

  componentDidLoad() {
    // Show on init if open
    if (this.show) {
      this.showMsg();
    }
  }

  /**
  * Render component <app-flash-message>
  *
  * @returns {void}
  */
  render() {
    return (
      <div
        class={{
          'app-alert': true,
          'success': this.type === 'success',
          'error': this.type === 'error',
          'hidden': !this.show,
          'text-sm': true,
          'dark:text-gray-300': true
        }}
        role="alert"
        aria-hidden={this.show ? "false" : "true"}
      >
        {this.closable && (<span class="app-close-btn" onClick={() => this.hideMsg()}>&times;</span>)}
        <slot></slot>
      </div>
    );
  }
}
