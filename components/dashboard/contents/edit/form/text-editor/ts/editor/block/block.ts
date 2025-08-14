import { Control } from "../control";
import { Editor } from "../editor";

export interface RawBlock {
  type: string;
}

export interface BlockReader {
  canParse(rawBlock: RawBlock): Boolean;
  parse(rawBlock: RawBlock, editor: Editor): Block;
}

export abstract class Block {
  elem: HTMLDivElement = document.createElement("div");
  container: HTMLDivElement = document.createElement("div");
  deleteButton: HTMLSpanElement = document.createElement("span");
  deleteIcon: HTMLDivElement = document.createElement("div");
  control: Control;

  constructor(public editor: Editor) {
    this.control = new Control(editor, this);
    this.elem.classList.add("editor-block");
    this.elem.appendChild(this.control.elem);
    this.elem.addEventListener(
      "click",
      function (this: Block) {
        this.focus();
        this.editor.showDeleteButton(this);
      }.bind(this)
    );

    this.elem.appendChild(this.container);
    this.container.classList.add("editor-block__container");
    this.container.appendChild(this.deleteButton);

    this.deleteButton.classList.add("editor-block__container__delete-button");
    this.deleteButton.innerHTML =
      '<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="21"  viewBox="0 0 448 512">' +
      '<path fill="currentColor" d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 ' +
      "0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 " +
      "0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 " +
      "24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 " +
      '6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z">' +
      "</path></svg>";
    this.deleteButton.appendChild(this.deleteIcon);
    this.deleteButton.onclick = () => {
      let answer = confirm("You want to delete this block?");
      if (answer == true) this.editor.remove(this);
    };
  }

  redraw() {}

  abstract getRawContent(): RawBlock;

  focus(): void {
    this.editor.showDeleteButton(this);
  }
}
