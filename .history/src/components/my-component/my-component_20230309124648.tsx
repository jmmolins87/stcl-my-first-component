import { Component, Prop, h, State, Listen } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  
  @Prop() value: string;
  @Prop() primary: boolean;

  @State() disabled: boolean = false;

  @Listen('click') handleClick() {
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false
    }, 3000)
  }

  render() {
    return (
      <button class={ this.primary ? 'primary' : '' } disabled={ this.disabled }>
        { this.value }
      </button>
    )
  }
}
