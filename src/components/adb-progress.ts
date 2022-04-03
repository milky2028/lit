import { html, LitElement, css } from "lit";
import { customElement, property  } from "lit/decorators.js";

const cancelPercentChanges = (newValue: number, oldValue: number) => newValue === 100 ? false : newValue !== oldValue;

@customElement("adb-progress")
export class AdbProgress extends LitElement {
  @property({ type: Number, reflect: true, hasChanged: cancelPercentChanges }) percent = 0;

  static styles = css`
    div {
      background-color: blueviolet;
      height: 0.125rem;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s ease;
    }
  `;

  render() {
    return html`<div style="transform: scaleX(${this.percent / 100});"></div>`;
  }
}
