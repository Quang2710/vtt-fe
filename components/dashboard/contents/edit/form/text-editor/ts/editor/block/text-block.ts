import {Editor} from '../editor';
import {Block, BlockReader, RawBlock} from './block'
import {TextBasedBlock} from "./text-based-block";

const TYPE: string = 'text';

export interface RawTextBlock extends RawBlock {
  content: string;
}

export class TextBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawTextBlock = rawBlock as RawTextBlock;
    return new TextBlock(editor, rawTextBlock.content);
  }
}

export class TextBlock extends TextBasedBlock {

  textarea: HTMLTextAreaElement = document.createElement('textarea');

  constructor(public editor: Editor, public content: string) {
    super(editor);
    this.elem.classList.add('editor-block__text');
    this.elem.appendChild(this.textarea);

    this.textarea.classList.add('editor-block__container__editor', 'editor-block__body');
    this.textarea.placeholder = 'Body text';
    this.textarea.rows = 1;
    this.textarea.innerHTML = this.content;

    this.enableAutoresizing();
  }

  focus(): void {
    super.focus();
    this.textarea.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawTextBlock = {
      type: TYPE,
      content: this.textarea.value
    };
    return raw;
  }
}