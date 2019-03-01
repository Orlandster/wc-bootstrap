import { Component } from '@stencil/core';

@Component({
  tag: 'b-alert',
  styleUrl: 'alert.scss'
})

export class Alert {

  render() {
    return (
      <div class="alert alert-primary" role="alert">
        This is a primary alert—check it out!
      </div>
    )
  }
}