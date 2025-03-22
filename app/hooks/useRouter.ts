import { useNavigate } from '@tanstack/react-router';

export const useRouter = () => {
  const navigate = useNavigate();

  return {
    /**
     * Navigate to an internal route
     */
    push: (path: string) => {
      navigate({
        to: path,
      });
    },

    /**
     * Navigate to an external route
     */
    pushExternal: (path: string) => {
      window.location.href = path;
    },

    /**
     * Replace current route with an internal route
     */
    replace: (path: string) => {
      navigate({
        replace: true,
        to: path,
      });
    },
  };
};
