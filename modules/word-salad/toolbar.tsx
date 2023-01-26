import clsx from 'clsx';
import * as React from 'react';
import * as Toggle from '@radix-ui/react-toggle';
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
        <Toggle.Root
          aria-label="Bold"
          type="button"
          pressed={isBoldActive}
          onPressedChange={() => {
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
        </Toggle.Root>
        <Toggle.Root
          aria-label="Italic"
          type="button"
          pressed={isItalicActive}
          onPressedChange={() => {
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
        </Toggle.Root>
        <Toggle.Root
          aria-label="Underline"
          type="button"
          pressed={isUnderlineActive}
          onPressedChange={() => {
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
        </Toggle.Root>
        <Toggle.Root
          aria-label="Heading"
          pressed={isHeadingActive}
          onPressedChange={() => {
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
        </Toggle.Root>
      </div>
    </div>
  );
}
