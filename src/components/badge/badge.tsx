import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-badge',
  styleUrl: 'badge.scss',
  shadow: true
})

export class Badge {
  /**
   * The badge variant
   */
  @Prop() variant: string = 'primary';

  render() {
    const classes = `badge badge-${this.variant}`;

    return (
      <span class={classes}>
        <slot />
      </span>
    )
  }
}