import type { AppProps /*, AppContext */ } from "next/app";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component className="m-8" {...pageProps} />;
}

export default MyApp;
