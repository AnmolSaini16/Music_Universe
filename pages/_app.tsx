import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import Layout from "../components/Layout";

function MyApp({
  Component,
  pageProps,
  ...appProps
}: AppProps<{
  session: Session;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  const getContent = () => {
    if ([`/auth/login`, "/auth/error"].includes(appProps.router.pathname)) {
      return (
        <>
          <Component {...pageProps} />
        </>
      );
    }
    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        <NextNProgress color="#1BD760" height={2} />
        {getContent()}
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
