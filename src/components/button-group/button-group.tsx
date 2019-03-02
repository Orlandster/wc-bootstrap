import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-button-group',
  styleUrl: 'button-group.scss',
  shadow: true
})

export class ButtonGroup {
  /**
   * The button-group role
   */
  @Prop() role: string = '';

  /**
   * The button-group aria-label
   */
  @Prop() label: string = '';

  /**
   * The button direction
   */
  @Prop() vertical: boolean = false;

  render() {
    const vertical = this.vertical ? 'btn-group-vertical' : '';
    const classes = `btn-group ${vertical}`;

    return (
        <div class={classes} role={this.role} aria-label={this.label}>
            <slot />
        </div>
    );
  }
}