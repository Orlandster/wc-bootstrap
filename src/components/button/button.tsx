import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-button',
  styleUrl: 'button.scss',
  shadow: true
})

export class Button {
  /**
   * The button variant
   */
  @Prop() variant: string = 'primary';

  /**
   * The button outline
   */
  @Prop() outline: boolean = false;

  /**
   * The button size
   */
  @Prop() size: string = '';

  /**
   * The button type
   */
  @Prop() type: string = '';

  render() {
    const classes = `btn btn-${this.variant}`;

    return (
      <button type="button" class={classes}>
        <slot />
      </button>
    )
  }
}