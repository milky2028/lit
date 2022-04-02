import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("adb-progress")
export class AdbProgress extends LitElement {
  render() {
    return html`<div>Progress bar</div>`;
  }
}
