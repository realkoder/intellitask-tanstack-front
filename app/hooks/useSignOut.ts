import { useRouter } from "@tanstack/react-router";
import { signOut } from "../lib/getBetterAuthRequestClient";

export const useSignOut = () => {
  const router = useRouter()

  return async () => {
    await signOut()
    router.navigate({ to: '/sign-in', reloadDocument: true });
  }
}
