import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("adb-button")
export class AdbButton extends LitElement {
  @property({ type: Boolean, reflect: true }) dark = true;

  static styles = css`
    :host([dark]) {
      --accent-color: white;
      --main-color: black;
    }

    :host {
      --accent-color: black;
      --main-color: white;
    }

    button {
      margin: 1.5rem;
      padding: 0.5rem 1.5rem;
      border-radius: 3rem;
      appearance: none;
      background-color: var(--main-color);
      border: 0.25rem solid var(--accent-color);
      cursor: pointer;
    }

    slot {
      font-size: 1rem;
      font-weight: bold;
      color: var(--accent-color);
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}
