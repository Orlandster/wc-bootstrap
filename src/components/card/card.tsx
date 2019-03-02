import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-card',
  styleUrl: 'card.scss',
  shadow: true
})

export class Card {
  /**
   * The card title
   */
  @Prop() title: string;

  /**
   * The image source
   */
  @Prop() imgSrc: string;

  /**
   * The image alt
   */
  @Prop() imgAlt: string;

  render() {
    const classes = `card`;

    return (
      <div class={classes}>
        <div class="card-body">
            <slot name="body" />
        </div>
      </div>
    )
  }
}