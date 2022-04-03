import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("adb-switch")
export default class AdbSwitch extends LitElement {
  static styles = css`
    .container {
      margin: 1rem;
      display: grid;
      grid-auto-flow: column;
      column-gap: 1rem;
      align-items: center;
      grid-template-areas: "label switch";
      width: max-content;
    }

    label {
      grid-area: label;
      user-select: none;
      font-family: sans-serif;
      font-weight: bold;
    }

    input {
      grid-area: switch;
    }

    .switch {
      grid-area: switch;
      height: 1.5rem;
      width: 3rem;
      background-color: lightgrey;
      border-radius: 1.5rem;
      transition: background-color 100ms;
    }

    .marker {
      grid-area: switch;
      z-index: 10;
      height: 1.5rem;
      width: 1.5rem;
      background-color: white;
      border-radius: 50%;
      box-shadow: 1px 1px 5px 1px lightgrey;
      transition: transform 100ms;
    }

    input:checked ~ .marker {
      transform: translateX(1.5rem);
    }

    input:checked ~ .switch {
      background-color: lightgreen;
    }
  `;

  #id = crypto.randomUUID();

  @property() label = "";
  @property({ type: Boolean, reflect: true }) checked = false;

  #onSwitchClick() {
    this.checked = !this.checked;
  }

  #onChange(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
  }

  render() {
    return html`
      <div role="switch" class="container">
        <label for=${this.#id}>${this.label}</label>
        <input id=${this.#id} type="checkbox" .checked=${this.checked} @input=${this.#onChange} />
        <div class="switch" @click=${this.#onSwitchClick}></div>
        <div class="marker" @click=${this.#onSwitchClick}></div>
      </div>
    `;
  }
}
