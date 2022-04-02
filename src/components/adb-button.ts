import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("adb-button")
export class AdbButton extends LitElement {
  render() {
    return html`<button><slot></slot></button>`;
  }
}
