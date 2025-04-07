import { useRouter } from '@tanstack/react-router';
import { a8 as si } from '../nitro/nitro.mjs';

const u = () => {
  const t = useRouter();
  return async () => {
    await si(), t.navigate({ to: "/sign-in", reloadDocument: true });
  };
};

export { u };
//# sourceMappingURL=useSignOut-DrUzyn0C.mjs.map
