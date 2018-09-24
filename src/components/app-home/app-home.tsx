import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
   /*
    Create links to others routes:
    <stencil-route-link url='/example'>
      <button>
        Example page
      </button>
    </stencil-route-link>
   */
    return (
      <div class='app-home'>
        <p>
          Base StencilJS Project
        </p>
      </div>
    );
  }
}
