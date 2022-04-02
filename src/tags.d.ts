import { AdbButton } from "./components/adb-button";
import { AdbProgress } from "./components/adb-progress";

declare global {
  interface HTMLElementTagNameMap {
    "adb-button": AdbButton;
    "adb-progress": AdbProgress;
  }
}

export {};
