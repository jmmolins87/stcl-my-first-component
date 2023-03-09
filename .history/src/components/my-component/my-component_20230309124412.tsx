import { Component, Prop, h, State } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  
  @Prop() value: string;
  @Prop() primary: boolean;

  @State() disabled: boolean = false;

  // @Listen('click') Hand

  render() {
    return (
      <button class={ this.primary ? 'primary' : '' } disabled={ this.disabled }>
        { this.value }
      </button>
    )
  }
}
