import {Editor} from '../editor';
import {Block, RawBlock, BlockReader} from './block'
import {TextBasedBlock} from "./text-based-block";

const TYPE: string = 'quote';

export interface RawQuoteBlock extends RawBlock {
  content: string;
}

export class QuoteBlockReader implements BlockReader {
  canParse(rawBlock: RawBlock): Boolean {
    return rawBlock.type == TYPE;
  }

  parse(rawBlock: RawBlock, editor: Editor): Block {
    let rawQuoteBlock = rawBlock as RawQuoteBlock;
    return new QuoteBlock(editor, rawQuoteBlock.content);
  }
}

export class QuoteBlock extends TextBasedBlock {

  textarea: HTMLTextAreaElement = document.createElement('textarea');

  constructor(public editor: Editor, public content: string) {
    super(editor);
    this.elem.classList.add('editor-block__text');
    this.elem.appendChild(this.textarea);

    this.textarea.classList.add('editor-block__container__editor', 'editor-block__quote');
    this.textarea.placeholder = 'Quote';
    this.textarea.rows = 1;
    this.textarea.innerHTML = this.content;

    this.enableNewLinePrevention();
    this.enableAutoresizing();
  }

  focus(): void {
    super.focus();
    this.textarea.focus();
  }

  getRawContent(): RawBlock {
    let raw: RawQuoteBlock = {
      type: TYPE,
      content: this.textarea.value
    };
    return raw;
  }
}