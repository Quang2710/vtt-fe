import { Block } from "./block";

export abstract class TextBasedBlock extends Block {
  textarea!: HTMLTextAreaElement;

  redraw() {
    if (!this.textarea) {
      return;
    }
    let evt = document.createEvent("Event");
    evt.initEvent("input", true, true);
    this.textarea.dispatchEvent(evt);
  }

  enableNewLinePrevention(): void {
    this.textarea.addEventListener("keypress", (ev) => {
      // 13 is the enter key
      if ((ev as KeyboardEvent).keyCode == 13) {
        ev.preventDefault();
      }
    });
  }

  enableAutoresizing(): void {
    this.textarea.addEventListener("input", () => {
      // We don't resize the textarea to be less than 10px.
      // This handles the case where the editor is initially hidden and later becomes visible.
      // The scrollHeight is 0 when the textarea is hidden.
      if (this.textarea.scrollHeight > 10) {
        this.textarea.style.height = "auto";
        this.textarea.style.height = this.textarea.scrollHeight + "px";
      }
    });

    // trigger a dummy event to set the correct height of the textarea after the DOM is initialized
    window.addEventListener(
      "DOMContentLoaded",
      () => {
        this.redraw();
      },
      false
    );

    setTimeout(() => {
      this.redraw();
    }, 1);
  }
}
