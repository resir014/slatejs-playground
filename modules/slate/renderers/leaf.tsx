import { RenderLeafProps } from 'slate-react';
import * as React from 'react';

export function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  if (leaf.bold) {
    return (
      <strong className="font-bold" {...attributes}>
        {children}
      </strong>
    );
  }

  if (leaf.italic) {
    return (
      <em className="italic" {...attributes}>
        {children}
      </em>
    );
  }

  if (leaf.underline) {
    return (
      <u className="underline" {...attributes}>
        {children}
      </u>
    );
  }

  return <span {...attributes}>{children}</span>;
}
