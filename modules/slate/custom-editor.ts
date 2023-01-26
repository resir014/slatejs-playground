/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Transforms, Editor, Text, Element } from 'slate';
import { CustomEditor } from './types';

export function isBoldMarkActive(editor: CustomEditor) {
  const marks = Editor.marks(editor);
  return marks ? marks.bold === true : false;
}

export function isItalicMarkActive(editor: CustomEditor) {
  const marks = Editor.marks(editor);
  return marks ? marks.italic === true : false;
}

export function isUnderlineMarkActive(editor: CustomEditor) {
  const marks = Editor.marks(editor);
  return marks ? marks.underline === true : false;
}

export function isHeadingBlockActive(editor: CustomEditor) {
  const { selection } = editor;

  if (!selection) {
    return false;
  }

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n: any) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'heading',
    })
  );

  return !!match;
}

export function toggleBoldMark(editor: CustomEditor) {
  const isActive = isBoldMarkActive(editor);

  Transforms.setNodes(
    editor,
    { bold: isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  );
}

export function toggleItalicMark(editor: CustomEditor) {
  const isActive = isItalicMarkActive(editor);

  Transforms.setNodes(
    editor,
    { italic: isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  );
}

export function toggleUnderlineMark(editor: CustomEditor) {
  const isActive = isUnderlineMarkActive(editor);

  Transforms.setNodes(
    editor,
    { underline: isActive ? null : true },
    { match: n => Text.isText(n), split: true }
  );
}

export function toggleHeadingBlock(editor: CustomEditor) {
  const isActive = isHeadingBlockActive(editor);

  Transforms.setNodes(
    editor,
    { type: isActive ? 'paragraph' : 'heading' },
    { match: n => Editor.isBlock(editor, n) }
  );
}

export function transformText(editor: CustomEditor, transformer?: string) {
  switch (transformer) {
    case 'bold': {
      toggleBoldMark(editor);
      break;
    }
    case 'italic': {
      toggleItalicMark(editor);
      break;
    }
    case 'underline': {
      toggleUnderlineMark(editor);
      break;
    }
    case 'heading': {
      toggleHeadingBlock(editor);
      break;
    }
    default: {
      break;
    }
  }
}
