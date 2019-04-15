import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-card',
  styleUrl: 'card.scss',
  shadow: true
})

export class Card {
  render() {
    const classes = `card`;

    return (
      <div class={classes}>
        <header class="card-header">
          <slot name="header" />
        </header>
        <div class="card-body">
          <slot name="body" />
        </div>
        <footer class="card-footer">
          <slot name="footer" />
        </footer>
      </div>
    )
  }
}