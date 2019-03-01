import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-alert',
  styleUrl: 'alert.scss',
  shadow: true
})

export class Alert {
  /**
   * The alert variant
   */
  @Prop() variant: string = 'primary';

  /**
   * The alert display state
   */
  @Prop() show: boolean = false;

  render() {
    let alert = null
    const classes = `alert alert-${this.variant}`;

    if(this.show) {
      alert = (
        <div class={classes} role="alert">
          <slot />
        </div>
      )
    }

    return [
      alert
    ]
  }
}