import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'b-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true
})

export class Breadcrumb {
  /**
   * The breadcrumb items
   */
  @Prop() items: {text: string, href: string, active: boolean}[] | string = [];

  render() {
    let breadcrumb = null;
    // parse json string from plain html property binding
    const itemsArray = (typeof this.items === 'string') ? JSON.parse(this.items) : this.items;

    if(itemsArray.length > 0) {
      breadcrumb = (
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            {itemsArray.map((item) =>
              <li class="breadcrumb-item">
                <a href={item.href} class={item.active ? 'active': ''}>{item.text}</a>
              </li>
            )}
          </ol>
        </nav>
      )
    }

    return [
      breadcrumb
    ]
  }
}