import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("adb-button")
export class AdbButton extends LitElement {
  static styles = css`
    :host {
      --accent-color: black;
      --main-color: white;
      --hover: orange; /* change */
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

    button:hover {
      background-color: var(--hover);
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
