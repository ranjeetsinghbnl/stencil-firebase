import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-page-home',
  styleUrl: 'app-page-home.scss',

})
export class AppPageHome {

  render() {
    return (
      <div class="wrapper_404">
        <div>
          <h1>404</h1>
          <p>The page you are requested is not found.</p>
          <stencil-route-link url='/'>
            <div class="buttons">Back to Home</div>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
