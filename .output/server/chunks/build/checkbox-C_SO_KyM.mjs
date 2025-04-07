import { jsx } from 'react/jsx-runtime';
import * as y from 'react';
import * as r from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { v } from '../nitro/nitro.mjs';

const d = y.forwardRef(({ className: i, ...s }, t) => jsx(r.Root, { ref: t, className: v("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", i), ...s, children: jsx(r.Indicator, { className: v("flex items-center justify-center text-current"), children: jsx(Check, { className: "h-4 w-4" }) }) }));
d.displayName = r.Root.displayName;

export { d };
//# sourceMappingURL=checkbox-C_SO_KyM.mjs.map
