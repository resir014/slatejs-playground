import { RenderElementProps } from 'slate-react';
import * as React from 'react';

export function MatchResultElement({ attributes, children }: RenderElementProps) {
  return (
    <div
      className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-md"
      {...attributes}
    >
      <span className="text-white text-xl font-bold">{children}</span>
    </div>
  );
}
