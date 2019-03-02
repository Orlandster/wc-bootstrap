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
   * The button size
   */
  @Prop() size: string = '';

  /**
   * The button type
   */
  @Prop() type: string = 'button';

  /**
   * The button element
   */
  @Prop() el: string = 'button';

  /**
   * The button value for elements of type input
   */
  @Prop() value: string = '';

  /**
   * The button link for the a tag element
   */
  @Prop() href: string = '';

  /**
   * The button state
   */
  @Prop() disabled: boolean = false;

  /**
   * The block state
   */
  @Prop() block: boolean = false;

  render() {
    const variant = `btn-${this.variant}`
    const size = this.size ? `btn-${this.size}` : '';
    const block = this.block ? 'btn-block' : '';
    const classes = `btn ${variant} ${size} ${block}`;

    const buttonEl = (
      <button type={this.type} class={classes} {...(this.disabled ? {disabled:true} : {})}>
        <slot />
      </button>
    );

    const linkEl = (
      <a class={classes} href={this.href} role="button">
        <slot />
      </a>
    );

    const inputEl = (
      <input type={this.type} class={classes} value={this.value} />
    );

    if(this.el === 'button') {
      return buttonEl;
    } else if(this.el === 'a') {
      return linkEl;
    } else if(this.el === 'input') {
      return inputEl;
    }
  }
}