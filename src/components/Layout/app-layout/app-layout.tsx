import { Component, Host, h } from '@stencil/core';
import { AppState } from "../../../store/app.store";

@Component({
  tag: 'app-layout',
  styleUrl: 'app-layout.scss'
})
export class AppLayout {

  render() {
    if (AppState.appInit === true) {
      return (<div>Loading...</div>);
    }
    if (AppState.appInitError != '') {
      return (<app-flash-message type="error" closable={false}>{AppState.appInitError}</app-flash-message>);
    }
    return (
      <Host>
        { AppState.isAuthenticated
          ?
          <app-layout-internal></app-layout-internal>
          :
          <app-layout-external></app-layout-external>
        }
      </Host>
    );
  }

}
