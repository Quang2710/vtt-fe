import { Editor } from "../editor";
import { Block, RawBlock, BlockReader } from "./block";

const TYPE: string = "image";

export interface RawImageBlock extends RawBlock {
  url: string;
}

export class ImageBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawImageBlock = rawBlock as RawImageBlock;
    return new ImageBlock(editor, rawImageBlock.url);
  }
}

export class ImageBlock extends Block {
  uploadPanel: HTMLDivElement = document.createElement("div");
  uploadIcon: HTMLDivElement = document.createElement("div");
  uploadLabel: HTMLDivElement = document.createElement("div");
  uploadButton: HTMLButtonElement = document.createElement("button");
  loadingIcon: HTMLSpanElement = document.createElement("span");
  inputFile: HTMLInputElement = document.createElement("input");

  imagePanel: HTMLDivElement = document.createElement("div");
  img: HTMLImageElement = document.createElement("img");

  constructor(public editor: Editor, public url: string) {
    super(editor);
    this.elem.classList.add("editor-block__image");
    this.img.classList.add("editor-block__image__img");

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.imagePanel);

    this.uploadPanel.appendChild(this.inputFile);
    this.uploadPanel.appendChild(this.uploadButton);
    this.uploadPanel.appendChild(this.uploadIcon);
    this.uploadPanel.appendChild(this.uploadLabel);
    this.uploadPanel.appendChild(this.loadingIcon);
    this.imagePanel.appendChild(this.img);

    this.uploadPanel.classList.add("editor-block__image__upload-panel");
    this.uploadIcon.classList.add("editor-block__image__upload-panel__icon");
    this.uploadButton.classList.add(
      "editor-block__image__upload-panel__button"
    );
    this.inputFile.classList.add("editor-block__image__upload-panel__input");

    this.uploadIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="53" height="42" viewBox="0 0 53 42">\n' +
      "    <defs>\n" +
      '        <path id="b" d="M13 0v29h30V0h20v53H0V0h13z"/>\n' +
      '        <rect id="a" width="53" height="34" x="5" y="12" rx="2"/>\n' +
      '        <mask id="d" width="53" height="34" x="0" y="0" fill="#fff">\n' +
      '            <use xlink:href="#a"/>\n' +
      "        </mask>\n" +
      "    </defs>\n" +
      '    <g fill="none" fill-rule="evenodd" transform="translate(-5 -4)">\n' +
      '        <mask id="c" fill="#fff">\n' +
      '            <use xlink:href="#b"/>\n' +
      "        </mask>\n" +
      '        <g fill-rule="nonzero" stroke="#666" stroke-dasharray="4,2" stroke-width="4" mask="url(#c)">\n' +
      '            <use mask="url(#d)" xlink:href="#a"/>\n' +
      "        </g>\n" +
      '        <path fill="#666" fill-rule="nonzero" d="M15.283 4C14.035 4 13 5.088 13 6.4v19.2c0 1.312 1.035 2.4 2.283 2.4h25.434C41.965 28 43 26.912 43 25.6V6.4C43 5.088 41.965 4 40.717 4H15.283zm.042 2h25.35c.197 0 .325.135.325.344V20l-4.916-4.155a.96.96 0 0 0-1.157-.054l-4.611 3.35-6.257-5.357a.95.95 0 0 0-.72-.226.95.95 0 0 0-.448.183L15 19.495V6.344c0-.209.128-.344.325-.344zM30 9c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zm-6.59 5l6.256 5.32a.963.963 0 0 0 1.157.054l4.601-3.333L41 22.73v2.927c0 .207-.128.342-.325.342h-25.35c-.197 0-.325-.135-.325-.342V22.1l8.41-6.1z"/>\n' +
      '        <path stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 24l-3 11h4l1 5h3l-1-5h4z"/>\n' +
      "    </g>\n" +
      "</svg>\n";

    if (this.isAdvancedUpload())
      this.uploadLabel.innerHTML =
        "Drag and drop a photo to upload or tap to upload";
    else this.uploadLabel.innerHTML = "Tap to upload";
    this.uploadPanel.onclick = () => {
      this.inputFile.click();
    };

    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      this.uploadPanel.addEventListener(eventName, this.preventDefaults, false);
    });

    ["dragenter", "dragover"].forEach((eventName) => {
      this.uploadPanel.addEventListener(eventName, () => {
        this.uploadPanel.classList.add(
          "editor-block__image__upload-panel--active"
        );
      });
    });

    ["dragleave", "drop"].forEach((eventName) => {
      this.uploadPanel.addEventListener(eventName, () => {
        this.uploadPanel.classList.remove(
          "editor-block__image__upload-panel--active"
        );
      });
    });

    this.uploadPanel.addEventListener("drop", (event: DragEvent) => {
      let dt = event.dataTransfer;
      if (!dt) return;
      let files = dt.files;

      this.handleFiles(files);
    });

    this.loadingIcon.innerHTML =
      '<span class="editor-block__image__loading-icon"></span> Uploading image...';
    this.stopLoading();
    this.uploadButton.innerHTML = "Upload image";
    this.uploadButton.onclick = () => {
      this.inputFile.click();
    };

    this.inputFile.type = "file";
    this.inputFile.accept = "image/*";
    this.inputFile.onchange = (event: Event): any => {
      let target = <HTMLInputElement>event.target;
      if (target.files) {
        this.handleFiles(target.files);
      }
    };

    this.updateView();
  }

  handleFiles(files: FileList): void {
    if (files.length == 0) {
      // in IE 11, the change event is fired when we programmatically set `.js-fileInput`'s value to empty string.
      return;
    }

    this.startLoading();

    let successCallback = (url: string) => {
      this.stopLoading();
      this.url = url;
      this.updateView();
    };

    let failCallback = (error: string) => {
      this.stopLoading();
    };

    this.editor.options?.uploadImage?.(files[0], successCallback, failCallback);
    this.inputFile.value = "";
  }

  preventDefaults(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
  }

  startLoading(): void {
    this.uploadLabel.style.display = "none";
    this.loadingIcon.style.display = "inline-block";
  }

  stopLoading(): void {
    this.uploadLabel.style.display = "inline-block";
    this.loadingIcon.style.display = "none";
  }

  isAdvancedUpload(): boolean {
    return (
      "draggable" in this.uploadPanel ||
      ("ondragstart" in this.uploadPanel && "ondrop" in this.uploadPanel)
    );
  }

  updateView(): void {
    if (this.url) {
      this.img.src = this.url;
      this.imagePanel.style.display = "block";
      this.uploadPanel.style.display = "none";
    } else {
      this.imagePanel.style.display = "none";
      this.uploadPanel.style.display = "block";
    }
  }

  focus(): void {
    super.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawImageBlock = {
      type: TYPE,
      url: this.url,
    };
    return raw;
  }
}
