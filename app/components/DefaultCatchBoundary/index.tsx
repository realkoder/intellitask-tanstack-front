import { ErrorComponent, Link, rootRouteId, useMatch, useRouter } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();

  console.error(error);

  return (
    <div className="min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6">
      <ErrorComponent error={error} />
      <div className="flex gap-2 items-center flex-wrap">
        <button
          onClick={() => {
            router.invalidate();
          }}
          className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600`}
        >
          Try Again
        </button>
        <Link
          to="/"
          className={`px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded text-white uppercase font-extrabold hover:cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600`}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
