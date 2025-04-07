import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Provider as JotaiProvider } from "jotai";

import appCss from "~/app.css?url";
import indexCss from "~/index.css?url";
import { DefaultCatchBoundary } from "../components/DefaultCatchBoundary";
import { NotFound } from "../components/NotFound";
import { getWebRequest } from "@tanstack/react-start/server";
import { createServerFn } from "@tanstack/react-start";
import { Environment, Local } from "../lib/client";
import { types } from "../lib/client";
import { Toaster } from "sonner";
import { inject } from "@vercel/analytics";

export const fetchBetterAuth = createServerFn({ method: "GET" }).handler(
  async () => {
    const env = import.meta.env.DEV ? Local : Environment("staging");
    const headers = getWebRequest()!.headers;
    try {
      const response = await fetch(env + "/api/authorize", {
        method: "GET",
        headers,
        credentials: "include",
      });

      if (!response.ok) {
        return {
          data: null,
        };
      }

      const data = await response.json();

      return {
        data,
      };
    } catch (error) {
      console.error("Auth error:", error);
      return {
        data: null,
      };
    }
  }
);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "IntelliOptima | Chat",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: indexCss },
    ],
  }),

  beforeLoad: async ({}) => {
    const { data } = await fetchBetterAuth();

    if (!data || !data.user || !data.session) {
      return {
        userId: undefined,
        user: undefined,
        session: undefined,
      };
    }

    return {
      userId: data.userID,
      user: data.user as types.UserDto,
      session: data.session as types.CustomSession,
    };
  },

  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <JotaiProvider>
        <Toaster />
        <Outlet />
      </JotaiProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  inject();
  
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}
