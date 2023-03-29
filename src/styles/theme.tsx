import { DefaultTheme, AppTheme } from "styled-components";
import { ThemeMode } from "@/app/AppTypes";



export const appTheme: DefaultTheme = {
  borderRadius: '0px',
  spacer: 1,
  typography: {},
};

export const lightTheme: AppTheme = {
  ...appTheme,
  mode: ThemeMode.LIGHT,
  colors: {
    main: 'DarkOrchid',
    secondary: 'MediumSpringGreen',
    text: 'black',
  }
}

export const darkTheme: AppTheme = {
  ...appTheme,
  mode: ThemeMode.DARK,
  colors: {
    main: 'RebeccaPurple',
    secondary: 'MediumSpringGreen',
    text: 'white',
  }
}

export function getPreferredMode(): ThemeMode {
  return window.matchMedia?.("(prefers-color-scheme:dark)")?.matches
    ? ThemeMode.DARK
    : ThemeMode.LIGHT;
}
