import { Block } from "./block/block";
import { ImageBlock } from "./block/image-block";
import { QuoteBlock } from "./block/quote-block";
import { HeaderBlock } from "./block/header-block";
import { TextBlock } from "./block/text-block";
import { Editor } from "./editor";
import { VideoBlock } from "./block/video-block";

export class Control {
  elem: HTMLDivElement = document.createElement("div");
  dashboard: HTMLDivElement = document.createElement("div");
  expandHandle: HTMLDivElement = document.createElement("div");
  expandButton: HTMLDivElement = document.createElement("div");
  quoteButton: HTMLDivElement = document.createElement("div");
  headerButton: HTMLDivElement = document.createElement("div");
  textButton: HTMLDivElement = document.createElement("div");
  imageButton?: HTMLDivElement;
  videoButton: HTMLDivElement;

  constructor(public editor: Editor, public block: Block) {
    this.elem.classList.add("editor-control");
    this.elem.appendChild(this.expandHandle);
    this.expandHandle.classList.add(
      "editor-control__expand-handle",
      "js-expand-handle"
    );

    this.expandHandle.appendChild(this.expandButton);
    this.expandButton.classList.add("editor-control__expand-handle__button");
    this.expandButton.innerHTML = "+ ADD";
    this.expandHandle.onclick = () => {
      this.toggleDashboard();
    };

    this.elem.appendChild(this.dashboard);
    this.dashboard.classList.add("editor-control__dashboard");

    this.dashboard.appendChild(this.headerButton);
    this.headerButton.classList.add(
      "editor-control__dashboard__button",
      "js-header-button"
    );
    this.headerButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Bold, Source Sans Pro" font-size="20" font-weight="bold" transform="translate(-48 -33)"><tspan x="46.98" y="47">H1</tspan></text></svg><p>Header Text</p>';
    this.headerButton.onclick = () => {
      editor.add(new HeaderBlock(editor, ""), this.block);
      this.collapseAll();
    };

    this.dashboard.appendChild(this.quoteButton);
    this.quoteButton.classList.add(
      "editor-control__dashboard__button",
      "js-quote-button"
    );
    this.quoteButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15"><path fill="#666" fill-rule="evenodd" d="M6.881 14.195H.511V9.64c0-1.843.163-3.298.488-4.363.325-1.065.926-2.021 1.802-2.867C3.677 1.562 4.796.898 6.156.414l1.246 2.63c-1.269.422-2.18 1.012-2.731 1.767-.552.756-.842 1.76-.873 3.015h3.083v6.37zm10.63 0h-6.369V9.64c0-1.858.163-3.317.488-4.374.325-1.058.929-2.01 1.813-2.856.884-.847 1.998-1.511 3.343-1.995l1.247 2.63c-1.27.422-2.18 1.012-2.731 1.767-.552.756-.843 1.76-.873 3.015h3.083v6.37z"/></svg><p>Quote<p>';
    this.quoteButton.onclick = () => {
      editor.add(new QuoteBlock(editor, ""), this.block);
      this.collapseAll();
    };

    this.dashboard.appendChild(this.textButton);
    this.textButton.classList.add(
      "editor-control__dashboard__button",
      "js-text-button"
    );
    this.textButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><text fill="#666" fill-rule="evenodd" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="20" transform="translate(-146 -32)"> <tspan x="144.57" y="47">Bd</tspan> </text></svg><p>Body Text</p>';
    this.textButton.onclick = () => {
      editor.add(new TextBlock(editor, ""), this.block);
      this.collapseAll();
    };

    if (this.editor.options.uploadImage) {
      this.imageButton = document.createElement("div");
      this.dashboard.appendChild(this.imageButton);

      this.imageButton.classList.add(
        "editor-control__dashboard__button",
        "js-image-button"
      );
      this.imageButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><path fill="#666" fill-rule="nonzero" d="M1.902 0C.862 0 0 .907 0 2v16c0 1.093.862 2 1.902 2h21.196c1.04 0 1.902-.907 1.902-2V2c0-1.093-.862-2-1.902-2H1.902zm0 1.714h21.196c.164 0 .272.113.272.286v11.357l-4.11-3.455a.805.805 0 0 0-.969-.045l-3.855 2.786-5.23-4.455A.798.798 0 0 0 8.601 8a.796.796 0 0 0-.373.152L1.63 12.937V2c0-.173.108-.286.272-.286zM14.402 4c-1.34 0-2.445 1.161-2.445 2.571 0 1.41 1.104 2.572 2.445 2.572 1.341 0 2.446-1.162 2.446-2.572 0-1.41-1.105-2.571-2.446-2.571zm0 1.714c.46 0 .815.374.815.857 0 .484-.355.858-.815.858-.46 0-.815-.374-.815-.858 0-.483.355-.857.815-.857zM8.662 9.93l5.23 4.446a.805.805 0 0 0 .969.045l3.847-2.786 4.662 3.92V18c0 .173-.108.286-.272.286H1.902c-.164 0-.272-.113-.272-.286v-2.973l7.032-5.098z"/></svg><p>Image</p>';
      this.imageButton.onclick = () => {
        editor.add(new ImageBlock(editor, ""), this.block);
        this.collapseAll();
      };
    }

    this.videoButton = document.createElement("div");
    this.dashboard.appendChild(this.videoButton);

    this.videoButton.classList.add(
      "editor-control__dashboard__button",
      "js-video-button"
    );
    this.videoButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g fill="#666" fill-rule="evenodd"><path d="M6.25 0C4.915 0 3.9-.004 3.06.092 2.222.188 1.485.397.939.952c-.545.554-.75 1.305-.846 2.16C-.002 3.969 0 5.003 0 6.365v7.272c0 1.36-.004 2.393.09 3.248.095.855.3 1.606.845 2.16.544.556 1.282.766 2.122.862.84.097 1.856.094 3.193.094h12.5c1.336 0 2.35.004 3.19-.092.84-.096 1.577-.305 2.122-.86.545-.554.75-1.305.846-2.16.095-.856.092-1.89.092-3.252V6.364c0-1.36.004-2.393-.09-3.248-.095-.855-.3-1.605-.845-2.16C23.521.4 22.783.19 21.943.093 21.103-.002 20.087 0 18.75 0H6.25zm0 1.818h12.5c1.336 0 2.327.005 2.993.082.665.076.934.21 1.06.339.126.129.256.402.331 1.08.075.677.08 1.685.08 3.045v7.272c0 1.361-.005 2.37-.08 3.047-.075.678-.207.951-.333 1.08-.126.128-.394.261-1.06.337-.666.076-1.656.082-2.99.082H6.25c-1.337 0-2.327-.005-2.993-.082-.666-.076-.934-.21-1.06-.339-.127-.129-.257-.402-.332-1.08-.075-.677-.08-1.685-.08-3.045V6.364c0-1.361.005-2.37.08-3.047.075-.678.207-.951.333-1.08.126-.128.395-.261 1.06-.337.666-.076 1.656-.082 2.991-.082z"/><path d="M8.744 4.192a1.369 1.369 0 0 0-.708 1.202v9.212c0 .5.271.965.708 1.202.434.236.965.21 1.374-.067l6.784-4.606h.001a1.376 1.376 0 0 0-.001-2.27c-1.428-.968-5.216-3.54-6.784-4.605a1.324 1.324 0 0 0-1.374-.068zm1.078 2.05c1.61 1.094 4.078 2.77 5.535 3.758l-5.535 3.757V6.243z"/></g></svg><p>Video</p>';
    this.videoButton.onclick = () => {
      editor.add(new VideoBlock(editor, ""), this.block);
    };
  }

  toggleDashboard(): void {
    if (this.dashboard.style.display == "none") this.expandDashboard();
    else this.collapseDashboard();
  }

  collapseDashboard(): void {
    this.dashboard.style.display = "none";
    this.expandButton.innerHTML = "+ ADD";
  }

  expandDashboard(): void {
    this.collapseAll();
    this.dashboard.style.display = "flex";
    this.expandButton.innerHTML = "HIDE";
  }

  collapseAll() {
    for (let i = 0; i < this.editor.blocks.length; i++) {
      this.editor.blocks[i].control.collapseDashboard();
    }
    this.editor.lastControl.collapseDashboard();
  }
}
