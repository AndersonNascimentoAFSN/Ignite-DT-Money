import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Transactions } from "./pages/Transactions";

export function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Transactions />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
