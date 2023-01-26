import clsx from 'clsx';
import * as React from 'react';
import { useSlate } from 'slate-react';
import { FontBoldIcon, FontItalicIcon, UnderlineIcon, HeadingIcon } from '@radix-ui/react-icons';
import {
  isBoldMarkActive,
  isHeadingBlockActive,
  isItalicMarkActive,
  isUnderlineMarkActive,
  transformText,
} from '../slate/custom-editor';

export function Toolbar() {
  const editor = useSlate();
  const isBoldActive = isBoldMarkActive(editor);
  const isItalicActive = isItalicMarkActive(editor);
  const isUnderlineActive = isUnderlineMarkActive(editor);
  const isHeadingActive = isHeadingBlockActive(editor);

  return (
    <div className="px-4 py-2 rounded-xl bg-white shadow-lg">
      <div className="space-x-2">
        <button
          aria-label="Bold"
          type="button"
          onClick={e => {
            e.preventDefault();
            transformText(editor, 'bold');
          }}
          className={clsx(
            'relative z-10 inline-flex items-center justify-center rounded-md border  p-1 w-10 h-10 text-sm font-medium  focus:z-20',
            isBoldActive
              ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          )}
        >
          <FontBoldIcon />
        </button>
        <button
          aria-label="Italic"
          type="button"
          onClick={e => {
            e.preventDefault();
            transformText(editor, 'italic');
          }}
          className={clsx(
            'relative z-10 inline-flex items-center justify-center rounded-md border  p-1 w-10 h-10 text-sm font-medium  focus:z-20',
            isItalicActive
              ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          )}
        >
          <FontItalicIcon />
        </button>
        <button
          aria-label="Underline"
          type="button"
          onClick={e => {
            e.preventDefault();
            transformText(editor, 'underline');
          }}
          className={clsx(
            'relative z-10 inline-flex items-center justify-center rounded-md border  p-1 w-10 h-10 text-sm font-medium  focus:z-20',
            isUnderlineActive
              ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          )}
        >
          <UnderlineIcon />
        </button>
        <button
          aria-label="Heading"
          onClick={e => {
            e.preventDefault();
            transformText(editor, 'heading');
          }}
          className={clsx(
            'relative z-10 inline-flex items-center justify-center rounded-md border  p-1 w-10 h-10 text-sm font-medium  focus:z-20',
            isHeadingActive
              ? 'border-indigo-500 bg-indigo-50 text-indigo-600'
              : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
          )}
        >
          <HeadingIcon />
        </button>
      </div>
    </div>
  );
}
