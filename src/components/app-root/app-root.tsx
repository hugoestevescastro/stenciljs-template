import { Component } from '@stencil/core';
import '@stencil/router';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}></stencil-route>
          </stencil-router>
        </main>
      </div>
    );
  }
}
