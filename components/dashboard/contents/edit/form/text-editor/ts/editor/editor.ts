import { Control } from "./control";
import { Block, BlockReader, RawBlock } from "./block/block";
import { ImageBlockReader } from "./block/image-block";
import { QuoteBlockReader } from "./block/quote-block";
import { HeaderBlockReader } from "./block/header-block";
import { TextBlockReader } from "./block/text-block";
import { VideoBlockReader } from "./block/video-block";

const BLOCKS: Array<BlockReader> = [
  new TextBlockReader(),
  new HeaderBlockReader(),
  new QuoteBlockReader(),
  new ImageBlockReader(),
  new VideoBlockReader(),
];

function convertRawContent(
  rawContent: Array<RawBlock>,
  editor: Editor
): Array<Block> {
  let blocks: Array<Block> = [];

  for (let rawBlock of rawContent) {
    let processed = false;
    for (let block of BLOCKS) {
      if (block.canParse(rawBlock)) {
        processed = true;
        blocks.push(block.parse(rawBlock, editor));
        break;
      }
    }

    if (!processed) {
      console.warn(`Unrecognized block type: '${rawBlock.type}'. Ignore.`);
    }
  }

  return blocks;
}

export interface EditorOptions {
  content: Array<RawBlock>;
  uploadImage?: (
    file: File,
    successCallback: (url: string) => void,
    failureCallback: (error: string) => void
  ) => void;
}

export class Editor {
  blocks: Array<Block>;
  lastControl!: Control;

  constructor(public elem: HTMLDivElement, public options: EditorOptions) {
    // Default to empty array if content is not provided or not an array
    const content = Array.isArray(this.options.content)
      ? this.options.content
      : [];
    this.blocks = convertRawContent(content, this);
    this.render();
  }

  add(block: Block, beforeBlock: Block) {
    if (beforeBlock) {
      for (let i = 0; i < this.blocks.length; i++) {
        if (beforeBlock == this.blocks[i]) {
          this.blocks.splice(i, 0, block);
          break;
        }
      }
      this.elem.insertBefore(block.elem, beforeBlock.elem);
    } else {
      this.blocks.push(block);
      this.elem.insertBefore(block.elem, this.lastControl.elem);
    }

    block.focus();
  }

  remove(block: Block) {
    for (let i = 0; i < this.blocks.length; i++) {
      if (block == this.blocks[i]) {
        this.blocks.splice(i, 1);
        block.elem.remove();
        break;
      }
    }
  }

  redraw() {
    for (let block of this.blocks) {
      block.redraw();
    }
  }

  getContent(): Array<RawBlock> {
    let rawContent: Array<RawBlock> = [];
    for (let block of this.blocks) {
      rawContent.push(block.getRawContent());
    }
    return rawContent;
  }

  showDeleteButton(block: Block) {
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks[i].deleteButton.style.display = "none";
      if (block == this.blocks[i]) {
        this.blocks[i].deleteButton.style.display = "inline-block";
      }
    }
  }

  private render() {
    for (let block of this.blocks) {
      this.elem.appendChild(block.elem);
    }

    // Pass the last block or undefined if there are no blocks
    const lastBlock =
      this.blocks.length > 0 ? this.blocks[this.blocks.length - 1] : undefined;
    this.lastControl = new Control(this, lastBlock as Block);
    this.elem.appendChild(this.lastControl.elem);
    this.lastControl.expandDashboard();
  }
}
