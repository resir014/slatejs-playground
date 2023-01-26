import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

export type CustomEditor = BaseEditor & ReactEditor;

export type ParagraphElement = {
  type: 'paragraph';
  children: CustomText[];
};

export type HeadingElement = {
  type: 'heading';
  children: CustomText[];
};

export type MatchResultElement = {
  type: 'match-result';
  children: CustomText[];
};

export type CustomElement = ParagraphElement | HeadingElement | MatchResultElement;

export type CustomTypes = CustomElement['type'];

export type FormattedText = {
  text: string;
  bold?: true | null;
  italic?: true | null;
  underline?: true | null;
};

export type CustomText = FormattedText;
