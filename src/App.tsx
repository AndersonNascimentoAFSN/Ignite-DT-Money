// import { QueryClient, QueryClientProvider } from "react-query";
// import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { Transactions } from "./pages/Transactions";
// import { ErrorFallback } from "./components/ErrorFallback";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  // const queryClient = new QueryClient();

  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback}>
    <ThemeProvider theme={defaultTheme}>
      {/* <QueryClientProvider client={queryClient}> */}
      <GlobalStyle />
      <RecoilRoot>
        <Transactions />
      </RecoilRoot>
      {/* </QueryClientProvider> */}
    </ThemeProvider>
    // </ErrorBoundary>
  );
}
