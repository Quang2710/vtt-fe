import { Editor, EditorOptions } from "./editor/editor";
import { RawBlock } from "./editor/block/block";
import { RawHeaderBlock } from "./editor/block/header-block";
import { RawImageBlock } from "./editor/block/image-block";
import { RawQuoteBlock } from "./editor/block/quote-block";
import { RawTextBlock } from "./editor/block/text-block";
import { RawVideoBlock } from "./editor/block/video-block";

if (typeof window !== "undefined") {
  (window as any).installEditor = (
    elem: HTMLDivElement,
    options: EditorOptions = {} as EditorOptions
  ) => {
    return new Editor(elem, options);
  };
}

export { Editor };
export type {
  EditorOptions,
  RawBlock,
  RawHeaderBlock,
  RawImageBlock,
  RawQuoteBlock,
  RawTextBlock,
  RawVideoBlock,
};
