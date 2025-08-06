import { Editor } from "../editor";
import { Block, RawBlock, BlockReader } from "./block";

const TYPE: string = "video";

export interface RawVideoBlock extends RawBlock {
  url: string;
}

export class VideoBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawVideoBlock = rawBlock as RawVideoBlock;
    return new VideoBlock(editor, rawVideoBlock.url);
  }
}

export class VideoBlock extends Block {
  uploadPanel: HTMLDivElement = document.createElement("div");

  inputTextContainer: HTMLDivElement = document.createElement("div");
  inputTextLabel: HTMLDivElement = document.createElement("div");
  inputTextIcon: HTMLSpanElement = document.createElement("span");
  inputText: HTMLInputElement = document.createElement("input");

  videoPanel: HTMLDivElement = document.createElement("div");
  videoElem: HTMLVideoElement = document.createElement("video");
  videoIframe: HTMLIFrameElement = document.createElement("iframe");

  constructor(public editor: Editor, public videoUrl: string) {
    super(editor);
    this.elem.classList.add("editor-block__video");
    this.videoElem.classList.add("editor-block__video__video-elem");

    this.elem.appendChild(this.uploadPanel);
    this.elem.appendChild(this.videoPanel);

    this.videoPanel.appendChild(this.videoElem);
    this.videoPanel.appendChild(this.videoIframe);
    this.videoIframe.frameBorder = "0";

    this.uploadPanel.appendChild(this.inputTextLabel);
    this.uploadPanel.appendChild(this.inputTextContainer);
    this.inputTextContainer.appendChild(this.inputTextIcon);
    this.inputTextContainer.appendChild(this.inputText);

    this.uploadPanel.classList.add("editor-block__video__upload-panel");
    this.inputTextContainer.classList.add(
      "editor-block__video__upload-panel__input-container"
    );
    this.inputTextLabel.classList.add(
      "editor-block__video__upload-panel__input-container__label"
    );
    this.inputTextIcon.classList.add(
      "editor-block__video__upload-panel__input-container__icon"
    );
    this.inputText.classList.add(
      "editor-block__video__upload-panel__input-container__input"
    );
    this.videoIframe.classList.add("js-video-iframe");

    this.inputTextLabel.innerHTML = "Paste a Youtube or Vimeo url";
    this.inputTextIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg>';
    this.inputText.type = "text";
    this.inputText.value = videoUrl;
    this.inputText.onchange = (event: Event): any => {
      this.videoUrl = this.inputText.value.trim();
      this.updateView();
    };

    this.updateView();
  }

  static extractYoutubeId(url: string): string {
    let regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=|shorts\/)([^#\&\?]*).*/;
    let match = url.match(regExp);
    return match ? match[2] : "";
  }

  static extractVimeoId(url: string): string {
    let regExp = /^.+vimeo.com\/(.*\/)?([^#\?]*)/;
    let match = url.match(regExp);
    return match ? match[2] || match[1] || "" : "";
  }

  updateView(): void {
    if (this.videoUrl) {
      if (this.videoUrl.includes("cloudinary")) {
        this.videoElem.src = this.videoUrl;
        this.videoPanel.style.display = "block";
        this.videoIframe.style.display = "none";
        this.uploadPanel.style.display = "none";
      } else if (this.videoUrl.includes("youtube")) {
        let youtubeId = VideoBlock.extractYoutubeId(this.videoUrl);
        this.videoIframe.src = `https://www.youtube.com/embed/${youtubeId}?rel=0`;
        this.videoIframe.width = "560";
        this.videoIframe.height = "315";

        this.videoPanel.style.display = "block";
        this.videoElem.style.display = "none";
        this.uploadPanel.style.display = "none";
      } else if (this.videoUrl.includes("vimeo")) {
        let vimeoId = VideoBlock.extractVimeoId(this.videoUrl);
        this.videoIframe.src = `https://player.vimeo.com/video/${vimeoId}?color=ec7070&portrait=0`;
        this.videoIframe.width = "560";
        this.videoIframe.height = "315";

        this.videoPanel.style.display = "block";
        this.videoElem.style.display = "none";
        this.uploadPanel.style.display = "none";
      }
    } else {
      this.videoPanel.style.display = "none";
      this.uploadPanel.style.display = "block";
    }
  }

  focus(): void {
    super.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawVideoBlock = {
      type: TYPE,
      url: this.videoUrl,
    };
    return raw;
  }
}
