// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    typography: {};
  }

  export interface AppTheme extends DefaultTheme {
    mode?: ThemeMode;
    colors: {
      main: string;
      secondary: string;
      text: string;
    };
  }
}
