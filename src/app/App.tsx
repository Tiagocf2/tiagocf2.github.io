import { createContext } from "react";
import { ThemeProvider } from 'styled-components';
// import { AppContextProps } from "app-types";
import { lightTheme, darkTheme, getPreferredMode } from '@/styles/theme';
import AppRouter from "./AppRouter"
import type { AppContextProps } from "./AppTypes";
import GlobalStyles from "@/styles/GlobalStyles";

const defaultProps: AppContextProps = {
  mode: getPreferredMode(),
  lang: 'pt-br',
}

export const AppContext = createContext<AppContextProps>(defaultProps);

function App() {
  return (
    <>
      <AppContext.Provider value={defaultProps}>
        <ThemeProvider theme={lightTheme}>
          <AppRouter />
          <GlobalStyles />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  )
}

export default App
