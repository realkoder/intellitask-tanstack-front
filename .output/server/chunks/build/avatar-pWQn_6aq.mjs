import { jsx } from 'react/jsx-runtime';
import * as r from '@radix-ui/react-avatar';
import { v } from '../nitro/nitro.mjs';

function i({ className: a, ...t }) {
  return jsx(r.Root, { "data-slot": "avatar", className: v("relative flex size-8 shrink-0 overflow-hidden rounded-full", a), ...t });
}
function n({ className: a, ...t }) {
  return jsx(r.Image, { "data-slot": "avatar-image", className: v("aspect-square size-full", a), ...t });
}
function f({ className: a, ...t }) {
  return jsx(r.Fallback, { "data-slot": "avatar-fallback", className: v("bg-muted flex size-full items-center justify-center rounded-full", a), ...t });
}

export { f, i, n };
//# sourceMappingURL=avatar-pWQn_6aq.mjs.map
